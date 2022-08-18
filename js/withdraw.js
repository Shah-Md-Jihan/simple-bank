document.getElementById('withdrow-btn').addEventListener('click', function () {
    // gettion withdrow amount from withdraw field 
    const withDrawField = document.getElementById('withdrow-field');
    const newWithDrawAmount = parseFloat(withDrawField.value);
    const BalanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(BalanceTotalElement.innerText);
    // clear withDrawField 
    withDrawField.value = '';
    // withdraw field validation
    if (newWithDrawAmount > previousBalanceTotal) {
        alert('Insufficient Balance!');
        return;
    }
    else if (isNaN(newWithDrawAmount)) {
        alert('Please enter your withdraw amount!');
        return;
    }

    // get the withdraw total amount 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalBalance = parseFloat(withdrawTotalElement.innerText);

    const currentWithdrawTotalBalance = previousWithdrawTotalBalance + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotalBalance;

    // get total balance 

    const currentBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    BalanceTotalElement.innerText = currentBalanceTotal;

});