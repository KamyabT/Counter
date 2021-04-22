let counter = 0 ;


let counterNumber = document.querySelector('#counterNumb');
let btnClicked = document.querySelectorAll('.btn');


btnClicked.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        const btnStyles = e.currentTarget.classList;
        if (btnStyles.contains("decrease")) {
            counter--;
        } else if (btnStyles.contains("increase")){
            counter++;
        } else {
            counter = 0;
        }
        counterNumber.textContent = counter;
    });
});




