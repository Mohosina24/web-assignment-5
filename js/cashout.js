document.getElementById('noakhali-btn').addEventListener('click',function(){
   
   const addMoney = getTextValueById('card1-taka');
   const totalMoney = getTextValueById('total-amount');
   const cashOut = totalMoney - addMoney;
   document.getElementById('total-amount').innerText = cashOut;

});
document.getElementById('fani-btn').addEventListener('click',function(){
   
   const addMoney2 = getTextValueById('card2-taka');
   const totalMoney2 = getTextValueById('total-amount');
   const cashOut2 = totalMoney2 - addMoney2;
   document.getElementById('total-amount').innerText = cashOut2;

});
document.getElementById('quata-btn').addEventListener('click',function(){
   
   const addMoney3 = getTextValueById('card3-taka');
   const totalMoney3 = getTextValueById('total-amount');
   const cashOut3 = totalMoney3 - addMoney3;
   document.getElementById('total-amount').innerText = cashOut3;

});
