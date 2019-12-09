










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