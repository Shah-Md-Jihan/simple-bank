// step 1: add event lister to deposit button 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // step 2: get input field value 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    // clear deposit field 
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please enter your deposit amount!');
        return;
    }
    // get the deposit total amount 
    const depositTotalElememt = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElememt.innerText);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElememt.innerText = currentDepositTotal;

    // get total balance amount 
    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(totalBalanceElement.innerText);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    totalBalanceElement.innerText = currentBalanceTotal;


});