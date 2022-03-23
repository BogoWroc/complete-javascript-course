'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        let answer = prompt(`What is your favourite language? ${this.options}`);
        if(answer>=0 && answer<=4){
            this.answers[answer] +=1;
        }
        console.log(this);
    }
}
;

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll) );


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    header.addEventListener('click', () =>  header.style.color = 'blue');
})();
