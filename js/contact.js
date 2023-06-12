/*----------------------------------
Global variables
----------------------------------*/

let overlay= document.querySelector('.overlay-parent');
const modal = document.querySelector('.overlay-txt');
const modalClose = document.getElementById('modal-close');
const submitBtn = document.getElementById('submit');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('user-email');
const msgField = document.getElementById('msg-field');
const cancelBtn = document.getElementById('cancel');


/*----------------------------------
Changing class on message textfield
----------------------------------*/

const textfield = document.getElementById('textfield');

function changeClass() {
    if(window.innerWidth >= 768){
        textfield.classList.remove('w-100');
        textfield.classList.add('w-75');
    } else {
        textfield.classList.remove('w-75');
        textfield.classList.add('w-100');
    }
};
window.addEventListener("load", changeClass);
window.addEventListener("resize", changeClass);

/*----------------------------------
Contact form: confirm modal
----------------------------------*/

submitBtn.addEventListener('click', (e) => {
    if(firstNameInput.value === "" && lastNameInput.value === "" && emailInput.value === "" && msgField.value === "" ) {

        overlay.classList.remove("hidden");
        modal.innerHTML = `<h2>Hello there!</h2>
        <p>Please fill out the form fields before submitting a message.</p>
        <p>Thank you for your interest in my company,</p>
        <p>Hannah Cherba</p>`;

    } else if (firstNameInput.value === "" && lastNameInput.value === "" && emailInput.value === ""){

        overlay.classList.remove("hidden");
        modal.innerHTML = `<h2>Hello there!</h2>
        <p>Please fill out the form fields before submitting a message.</p>
        <p>Thank you for your interest in my company,</p>
        <p>Hannah Cherba</p>`;

    } else if (msgField.value === "") {

        overlay.classList.remove("hidden");
        modal.innerHTML = `<h2>Hello ${firstNameInput.value} ${lastNameInput.value},</h2>
        <p>Please fill out the form fields before submitting a message.</p>
        <p>Thank you for your interest in my company,</p>
        <p>Hannah Cherba</p>`;

    } else {

        overlay.classList.remove("hidden");
        modal.innerHTML = `<h2>Hello ${firstNameInput.value} ${lastNameInput.value},</h2>
        <p>Thank you for submitting a message!</p>
        <p>Your message has been recieved and I will contact you shortly at ${emailInput.value}.</p>
        <p>Hannah Cherba</p>`;
    }
});

modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
    });

cancelBtn.addEventListener('click', ()=>{
    msgField.value="";
    firstNameInput.value="";
    lastNameInput.value="";
    emailInput.value="";
}); 
function resetSelect(){
    const select = document.getElementById('floatingSelectGrid');
    select.selectedIndex=0;
};