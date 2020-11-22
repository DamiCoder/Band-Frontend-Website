//ZAD. 1
function showOrHideMenu() {
    let image = document.querySelector("#hamburgerMenuImage");
    var menuItems = $('#menuItems');

    if ($(menuItems).is(':visible')) {
        image.src = "images/bars-solid-font-awesome.svg";
    } else {
        image.src = "images/times-circle-regular-font-awesome.svg";
    }
    $(menuItems).slideToggle(400);
}

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

const contactForm = document.querySelector('.form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});
