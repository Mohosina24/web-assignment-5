document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();
   const getMoney = getInputFieldValueById('noakhali-input');
   const addMoney = getTextValueById('card1-taka');
  
  if(!isNaN(getMoney)){
    const newMoney = getMoney + addMoney;
   document.getElementById('card1-taka').innerText = newMoney;
   document.getElementById('my_modal_1').showModal();
   
  }
  else{
    alert('this is not a number');
  }
})

document.getElementById('fani-btn').addEventListener('click',function(event){
  event.preventDefault();
 const getMoney = getInputFieldValueById('fani-input');
 const addMoney = getTextValueById('card2-taka');

if(!isNaN(getMoney)){
  const newMoney = getMoney + addMoney;
 document.getElementById('card2-taka').innerText = newMoney;
 document.getElementById('my_modal_1').showModal();
 
}
else{
  alert('this is not a number');
}
})
document.getElementById('quata-btn').addEventListener('click',function(event){
  event.preventDefault();
 const getMoney = getInputFieldValueById('quata-input');
 const addMoney = getTextValueById('card3-taka');

if(!isNaN(getMoney)){
  const newMoney = getMoney + addMoney;
 document.getElementById('card3-taka').innerText = newMoney;
 document.getElementById('my_modal_1').showModal();
 
}
else{
  alert('this is not a number');
}
})