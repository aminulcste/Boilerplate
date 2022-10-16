(function (){
    console.log('connected');
    const p1ScoreDisplay=document.getElementById('p1Score');
    const p2ScoreDisplay=document.getElementById('p2Score');
    const wScoreDisplay=document.querySelector('p span');
    const inputScore=document.getElementById('inputScore');
    const p1btn=document.getElementById('p1btn');
    const p2btn=document.getElementById('p2btn');
    const resetbtn=document.getElementById('resetbtn');
    let p1Score=0;
    let p2Score=0;
    let winningScore=5;
    let gameover=false;
    
    p1btn.addEventListener('click',()=>{
        if(!gameover){
            p1Score++;
          winner(p1Score,winningScore)
         p1ScoreDisplay.textContent=p1Score;
        }
         
    });
    p2btn.addEventListener('click',()=>{
        if(!gameover){
             p2Score++;
        winner(p2Score,winningScore);
        p2ScoreDisplay.textContent=p2Score;
        }
       
    });
    
    function winner(oldScore,winningScore){
        if(oldScore==winningScore){
            if(p1Score==winningScore){
                p1ScoreDisplay.classList.add('winner');
            }
            else{
                p2ScoreDisplay.classList.add('winner');
            }
            gameover=true;
            p1btn.setAttribute('disabled','disabled');
            p2btn.setAttribute('disabled','disabled');
        }
    }
    inputScore.addEventListener('change',()=>{
       /// console.log(typeof inputScore.value);
        winningScore=Number(inputScore.value);
        wScoreDisplay.textContent=inputScore.value;
        inputScore.value='';
        reset();
    });
    function reset(){
        p1Score=0;
        p2Score=0;
        gameover=false;
        p1ScoreDisplay.textContent=0;
        p2ScoreDisplay.textContent=0;
        p1ScoreDisplay.classList.remove('winner');
        p2ScoreDisplay.classList.remove('winner');
        p1btn.removeAttribute('disabled');
        p2btn.removeAttribute('disabled');
    }
    resetbtn.addEventListener('click',reset);

})();