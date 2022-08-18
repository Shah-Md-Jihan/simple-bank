document.getElementById('withdrow-btn').addEventListener('click', function () {
    // gettion withdrow amount from withdraw field 
    const withDrawField = document.getElementById('withdrow-field');
    const newWithDrawAmount = parseFloat(withDrawField.value);

    // get the withdraw total amount 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalBalance = parseFloat(withdrawTotalElement.innerText);

    const currentWithdrawTotalBalance = previousWithdrawTotalBalance + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotalBalance;
    // clear withDrawField 
    withDrawField.value = '';
});