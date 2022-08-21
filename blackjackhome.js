
let cards=[]

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let i=0
let str=""

let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector(".card-el")
let gameEl=document.querySelector("#game-el")
let playerEl=document.querySelector("#player-el")


let player = {
    
     name : "Veda",
     chips : 1234
}

playerEl.textContent = player.name +" : "+ " $ " + player.chips




function getRandomCard()
 {
    let value=Math.floor((Math.random()*12)+1)
    if(value === 1){
        return 11
    }else if(value > 10 ){
        return 10
    }
    else{
        return value
    }
}



function startGame()
{
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards=[firstcard , secondcard]
    sum=firstcard + secondcard
    isAlive = true
    renderGame()
}



function renderGame()
{

     sumEl.textContent="Sum:"+ sum

    cardEl.textContent="cards: "+" "+ cards

    if(sum <= 20){
        message = "Do you want to draw a new card?"
        
    } 
    else if(sum === 21){
        message = "You've got BlackJack!"
        hasBlackJack=true
    }
    else{
        message = "you are out of the game!"
        isAlive = false
    }
    messageEl.textContent=message
    
}




function gameOver()
{
   if(sum===21)
   {
    gameEl.textContent= " CONGRAGULATION😍😍😍👌 "

   }
   else
   {
   
    gameEl.textContent= " WELL PLAYED😁😁"
    
   }
    
} 


function newCard()
{
       if(isAlive === true && hasBlackJack === false)
       {
        let newcard = getRandomCard()
        cards.push(newcard)
        sum += newcard
        renderGame()
        
        }
   
    gameOver()
}

