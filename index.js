function writeCards(array,event){
    let thanksArray = []
  for(let i = 0;i < array.length; i++){
      
      thanksArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
      
  }
  return thanksArray
}

function countDown(number){
    while(number >= 0){
    console.log(number)
    number--
}
   
}
