package example;

import avm.Blockchain;
import org.aion.avm.tooling.abi.Callable;

// Title: HelloHackathon
// Desc: A simple class with a getter and setter method for interacting with a string.
// Deployed By Address: 0xa0f1002373877bd6987f23af0daa97f5d886d591cf308408cb396eda44f3456e
// Contract AVM Testnet Address: 0xa0cef7284eced2fbde8a4a54750c283119929ca680988f8f0467f53957677b5f

public class HelloHackathon
{
    private static String myStr = "Hello Hackathon!";

    @Callable
    public static String getString() {
        return myStr;
    }

    @Callable
    public static void setString(String newStr) {
        myStr = newStr;
    }

}
