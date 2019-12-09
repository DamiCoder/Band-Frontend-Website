//ZAD. 1
function showOrHideMenu() {
    let x = document.querySelector("#menuItems");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//ZAD. 2
const buttons = document.querySelectorAll(".concerts__item .button");
for(let button of buttons) {
    onBuyTicketButtonClick(button)
}

function onBuyTicketButtonClick(button){
    button.addEventListener('click', event => {
        let replacementString = document.createElement('p');
        replacementString.innerText = "Have fun!";
        replacementString.style.cssText='color: #CCC8FF;opacity:50%;font-family:"Open Sans",sans-serif;font-size:13px;letter-spacing:3.5px;text-align:right;margin:0;';
        button.replaceWith(replacementString);
    });
}

//ZAD. 3
const myButton = document.querySelector('#formSubmitButton');
myButton.addEventListener('click', event => {
    //Dodałem preventDefault bo chciałem zablokować validację o braku danych w inputach, a w poleceniu do pracy domowej nie było sprecyzowane czy ją pozostawić, więc usunąłem
    event.preventDefault();
    onFormSubmit();
});


function onFormSubmit() {
    const userInputNodes = document.querySelectorAll(".form__input");
    //Bez formData, ale to chyba nie błąd:)?
    for(let node of userInputNodes) {
        console.log("Input name: " + node.name + "Input value: " + node.value)
    }
}