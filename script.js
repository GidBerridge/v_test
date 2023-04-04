const modalButton = document.getElementById("modal-button");
const modalContainer = document.getElementById("modal-container");
const closeModal = document.getElementById("close-modal-X");
const closeModalButton = document.getElementById("close-modal-button");

modalButton.addEventListener("click", function (event) {
    event.preventDefault();
    modalContainer.style.display = "block";
});

closeModal.addEventListener("click", function () {
    modalContainer.style.display = "none";
});
closeModalButton.addEventListener("click", function () {
    modalContainer.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modalContainer) {
        modalContainer.style.display = "none";
    }
});
