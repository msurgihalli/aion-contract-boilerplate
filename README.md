# Aion Contract Boilerplate

A complete example of a Java smart contract and a simple Web3.js frontend. You can use this project as a jumping off point to build your application.

## Run the Examples

To see this project in action, just open up `src/main/frontend/basic.html` in a browser and click on the buttons. The JavaScript for that file is already linked up to interact with a contract on the Aion AVM Testnet. Feel free to view and change the string! There is already a private key with `AION`, and a contract address entered into the JavaScript.

If you want to run the AIWA example, navigate to the `src/main/frontend` folder in your terminal and enter `npm install`. This will install a service called `serve`. Then, run `serve` in the terminal and go to [http://localhost:5000/](http://localhost:5000/) in a Chrome based browser (Chrome, Brave, Opera, etc) with [AIWA](https://getaiwa.com) installed. You should be able to interact with the contract through AIWA.

## Edit the Contract

You need to have IntelliJ installed. Once you have it installed, just import the project! You'll then be able to run the test cases.

Obviously, if you'd prefer to edit the contract itself in something other than IntelliJ then feel free! But you won't have access to the built in tools that IntelliJ and the Aion4J plugin offer.

## Need Help

Not sure where to go next? Take a look at the [Aion docs](https://docs.aion.network), specifically the [Aion Virtual Machine](https://docs.aion.network/docs/aion-virtual-machine) section for more info!