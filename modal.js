const modal = document.querySelector(".modal");
const btnMessage = document.querySelector(".btn-message");
const btnCloseModal = document.querySelector(".btn-close-modal");

function toggleModal(){
    modal.classList.toggle("show-modal");
}

function windowOnClick(event){
    if(event.target === modal){
        toggleModal();
    }
}

btnMessage.addEventListener("click", toggleModal);
btnCloseModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);