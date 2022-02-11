document.getElementById('deposit-button').addEventListener('click',function(){
    const deInpute = document.getElementById('deposit-input');
    const newdepositeAmount=parseFloat(deInpute.value);

    const previousDeposite=document.getElementById('deposit-total');
    //const totalDeposite=newdepositeAmount
    const previousDeposite1=parseFloat(previousDeposite.innerText);
    const totalDeposite=newdepositeAmount+previousDeposite1;
    previousDeposite.innerText=totalDeposite;


     // update account balance 

    const addlBalenceText=document.getElementById('balance-total');
    const addbalenceValue=addlBalenceText.innerText;
    const addlBalence=parseFloat(addbalenceValue);
    const  totalBalence= newdepositeAmount+addlBalence;
    addlBalenceText.innerText=totalBalence;





     //const balanceTotal = document.getElementById('balance-total');
     //const balanceTotalText = balanceTotal.innerText;
     //const previousBalanceTotal = parseFloat(balanceTotalText);
     //const newBalanceTotal = previousBalanceTotal + newDepositAmount;
     //balanceTotal.innerText = newBalanceTotal;

    // clear input field
    deInpute.value='';
})

// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click',function(){
    const widthdrawInput=document.getElementById('withdraw-input');
    const widthdrawInputText= widthdrawInput.value;
    const widthdrawInputvalue=parseFloat(widthdrawInputText);

    const widthdrawTag=document.getElementById('withdraw-total');
    const widthdrawTagText=widthdrawTag.innerText;
    const widthdrawTagvalue=parseFloat(widthdrawTagText);

    
    const widthdrawTotal=widthdrawInputvalue+widthdrawTagvalue;

     
     widthdrawTag.innerText=widthdrawTotal;

     const addlBalenceText=document.getElementById('balance-total');
    const addbalenceValue=addlBalenceText.innerText;
    const addlBalence=parseFloat(addbalenceValue);
    const  totalBalence= addlBalence-widthdrawInputvalue;
    addlBalenceText.innerText=totalBalence;

     widthdrawInput.value='';

})