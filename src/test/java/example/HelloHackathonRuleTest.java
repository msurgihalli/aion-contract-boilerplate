package example;

import org.aion.avm.core.util.ABIUtil;
import avm.Address;
import org.aion.avm.tooling.AvmRule;
import org.aion.vm.api.interfaces.ResultCode;
import org.junit.Assert;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Test;

import java.math.BigInteger;

public class HelloHackathonRuleTest {
    @ClassRule
    public static AvmRule avmRule = new AvmRule(true);

    private Address from = avmRule.getPreminedAccount();
    private Address contractAddress;

    @Before
    public void deployContract() {
        // Deploying a contract steps:
        // 1. Get the contract bytes to be used for the deploy transaction.
        // 2. Deploy the contract and get the address.
        byte[] contract = avmRule.getDappBytes(HelloHackathon.class, null);
        contractAddress = avmRule.deploy(from, BigInteger.ZERO, contract).getDappAddress();
    }

    @Test
    public void testSetString() {
        // Calling a contract steps:
        // 1. Encode method name and arguments.
        // 2. Make the call.
        byte[] txData = ABIUtil.encodeMethodArguments("setString","Hello Alice & Bob");
        AvmRule.ResultWrapper result = avmRule.call(from, contractAddress, BigInteger.ZERO, txData);
        ResultCode status = result.getReceiptStatus();
        Assert.assertTrue(status.isSuccess());
    }

    @Test
    public void testGetString() {
        // Calling a contract steps:
        // 1. Encode method name and arguments.
        // 2. Make the call.
        byte[] txData = ABIUtil.encodeMethodArguments("getString");
        AvmRule.ResultWrapper result = avmRule.call(from, contractAddress, BigInteger.ZERO, txData);

        // getReceiptStatus() checks the status of the transaction execution
        ResultCode status = result.getReceiptStatus();
        Assert.assertTrue(status.isSuccess());
    }
}

