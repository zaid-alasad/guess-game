const secretNumber = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    return randomNumber;
};
const random = secretNumber();

let score = 20;
let hightscrore = 0;

let zaid = document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent= '⛔Please enter a number';
        document.body.style.backgroundColor = "gray";
    } 
    else if(guess === random){
        document.querySelector('.message').textContent= '🎉correct choise';
        document.querySelector('.highscore').textContent = score;
        document.body.style.backgroundColor = "green";
        document.querySelector('.number').textContent = random;
    }
    else if(guess > random){
        if(score > 1){
        document.querySelector('.message').textContent= ' Too high';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        document.body.style.backgroundColor = "red";
        }
        else{
            document.querySelector('.message').textContent= '��You loose the game, the correct number was '+ random;
        }
    }
    else if(guess < random){
        if(score > 1){
        document.querySelector('.message').textContent= '👇👇Too low';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        document.body.style.backgroundColor = "red";
        } 
        else{
            document.querySelector('.message').textContent= 'You loose the game, the correct number was '+ random;
        }
     }
  });

  document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent= '';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = "#222";
    random = secretNumber();
    document.querySelector('.number').textContent = random;
  });
  