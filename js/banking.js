function getInputValue(inputId){
   const inputField = document.getElementById(inputId);
   const inputAmountText = inputField.value;
   const inputAmount  = parseFloat(inputAmountText);
   // clear input 
   inputField.value = "";
   return inputAmount; 
}
function updateTotalFeild(totalFieldId,amount){
	const totalElement = document.getElementById(totalFieldId);
	const totalText = totalElement.innerText;
	const previousTotal = parseFloat(totalText);
	totalElement.innerText = previousTotal+amount;
}
function getCurrentBalance(){
	const balanceTotal =  document.getElementById("balance-total");
	const balanceText = balanceTotal.innerText;
	const balanceAmount = parseFloat(balanceText);
	return balanceAmount;
}
// update balance
function updateBalance(amount,isAdd){
	const balanceTotal =  document.getElementById("balance-total");
	const balanceText = balanceTotal.innerText;
	const balanceAmount = parseFloat(balanceText);
    if(isAdd==true){
		balanceTotal.innerText = balanceAmount+amount;
	}else{
		balanceTotal.innerText = balanceAmount-amount;
	}
}
// deposite 
document.getElementById("deposite-button").addEventListener("click",function(){
const depositeInput = getInputValue("deposite-input");
	 if(depositeInput>0){
	    updateTotalFeild("deposite-total",  depositeInput);
		updateBalance(depositeInput,true);
	 }
});
// withdraw
document.getElementById("withdraw-button").addEventListener("click",function(){
	const withdrawAmount = getInputValue("withdraw-input");
	const currentBalance = getCurrentBalance();
	if(withdrawAmount>0 && withdrawAmount<currentBalance ){
		updateTotalFeild("withdraw-total",withdrawAmount);
	updateBalance(withdrawAmount,false);
	}
});
