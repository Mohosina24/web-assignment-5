document.getElementById('noakhali-btn').addEventListener('click',function(){
   
   const addMoney = getTextValueById('card1-taka');
   const totalMoney = getTextValueById('total-amount');
   const cashOut = totalMoney - addMoney;
   document.getElementById('total-amount').innerText = cashOut;

});
document.getElementById('fani-btn').addEventListener('click',function(){
   
   const addMoney = getTextValueById('card2-taka');
   const totalMoney = getTextValueById('total-amount');
   const cashOut = totalMoney - addMoney;
   document.getElementById('total-amount').innerText = cashOut;

});
document.getElementById('quata-btn').addEventListener('click',function(){
   
   const addMoney = getTextValueById('card3-taka');
   const totalMoney = getTextValueById('total-amount');
   const cashOut = totalMoney - addMoney;
   document.getElementById('total-amount').innerText = cashOut;

});
