// Create a web3 object by supplying a node to use.
const web3 = new Web3(
    new Web3.providers.HttpProvider(
        "https://aion.api.nodesmith.io/v1/avmtestnet/jsonrpc?apiKey=ab40c8f567874400a69c1e80a1399350"
    )
);

// Set an account to use for this application.
const account = web3.eth.accounts.privateKeyToAccount(
    "4b45d22a2f042d9822f144de9de85bb2171f94f5ac5a6530a3a8103fcd6f547412b179b3b0692e48e5e5b9e683194c3b1e5f88658fe530346ccf3d502066aaf3"
);

// Set the address where the contract is deployed to.
const contractAddress = "0xa0cef7284eced2fbde8a4a54750c283119929ca680988f8f0467f53957677b5f";

// Get the value of the myStr variable from within the HelloAvm.java contract.
async function getString() {
    // Create the Transaction Object
    let data = web3.avm.contract.method("getString").encode();
    const transactionObject = {
        from: account.address,
        to: contractAddress,
        data: data,
        gasPrice: 10000000000,
        gas: 2000000,
        type: "0x1"
    };

    // Send the call to the network and wait for a response.
    let initialResponse = await web3.eth.call(transactionObject);
    let avmResponse = await web3.avm.contract.decode("string", initialResponse);

    // Print the response to the frontend, and the time it was updated.
    document.querySelector("#output_h3").innerHTML = avmResponse;
    document.querySelector(
        "#last_updated_code"
    ).innerHTML = new Date().getTime();
}

// Set the value of the myStr variable from within the HelloAvm.java contract.
async function setString() {
    // Set the button to loading and disable.
    document.querySelector("#set_string_button").innerHTML = "Loading...";
    document.querySelector("#set_string_button").disabled = true;

    // Get the value of the input box.
    let inputString = document.querySelector("#input_string_textarea").value;

    // Create the data object, with the inputString variable set.
    let data = web3.avm.contract
        .method("setString")
        .inputs(["string"], [inputString])
        .encode();

    // Create the transaction object.
    const transaction = {
        from: account.address,
        to: contractAddress,
        data: data,
        gasPrice: 10000000000,
        gas: 2000000,
        type: "0x1"
    };

    // Sign the transaction.
    const signedTransaction = await web3.eth.accounts
        .signTransaction(transaction, account.privateKey)
        .then(transactionResponse => (signedCall = transactionResponse));

    // Send the transaction to the network and wait for a response.
    const transactionReceipt = await web3.eth
        .sendSignedTransaction(signedTransaction.rawTransaction)
        .on("receipt", receipt => {
            console.log(
                "Receipt received!\ntransactionHash =",
                receipt.transactionHash
            );
        });

    // Log the receipt.
    console.log(transactionReceipt);
}