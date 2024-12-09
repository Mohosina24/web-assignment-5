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
// document.getElementById('modal-close').addEventListener('click',function(){
//     document.getElementById('my_modal_1').close();
// })