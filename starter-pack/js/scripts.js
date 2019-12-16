//ZAD. 1
function showOrHideMenu() {
    let menuItems = document.querySelector("#menuItems");
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
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
const contactForm = document.querySelector('.contact__form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});
