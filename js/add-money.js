document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();
   const getMoney = getInputFieldValueById('noakhali-input');
   const addMoney = getTextValueById('card1-taka');
  
  if(!isNaN(getMoney)){
    const newMoney = getMoney + addMoney;
   document.getElementById('card1-taka').innerText = newMoney;
  //  document.getElementById('my_modal_1').showModal();
   
  //  add to transaction history
   const p = document.createElement('p');
   p.innerText = `${getMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
   console.log(p)
   document.getElementById('transaction-container').appendChild(p);
  }
  else{
    alert('this is not a number');
  }
})

document.getElementById('fani-btn').addEventListener('click',function(event){
  event.preventDefault();
 const getMoney2 = getInputFieldValueById('fani-input');
 const addMoney2 = getTextValueById('card2-taka');

if(!isNaN(getMoney2)){
  const newMoney2 = getMoney2 + addMoney2;
 document.getElementById('card2-taka').innerText = newMoney2;
 document.getElementById('my_modal_2').showModal();

}
else{
  alert('this is not a number');
}
})
document.getElementById('quata-btn').addEventListener('click',function(event){
  event.preventDefault();
 const getMoney3 = getInputFieldValueById('quata-input');
 const addMoney3 = getTextValueById('card3-taka');

if(!isNaN(getMoney3)){
  const newMoney3 = getMoney3 + addMoney3;
 document.getElementById('card3-taka').innerText = newMoney3;
 document.getElementById('my_modal_3').showModal();
 
}
else{
  alert('this is not a number');
}
})