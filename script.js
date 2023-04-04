const modalButton = document.getElementById("modal-button");
const modalContainer = document.getElementById("modal-container");
const closeModal = document.getElementById("close-modal-X");
const closeModalButton = document.getElementById("close-modal-button");

const removeShow = () => {
    modalContainer.classList.remove("show")
    setTimeout(function () {
        modalContainer.style.display = "none"
    }, 210);
}

modalButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (modalContainer.style.display == "block") {
        removeShow()
    } else {
        modalContainer.style.display = "block";
        setTimeout(function () {
            modalContainer.classList.add("show")
        }, 20);
    }

}, false);

closeModal.addEventListener("click", function () {
    removeShow()
});


closeModalButton.addEventListener("click", function () {
    removeShow()
});

window.addEventListener("click", function (event) {
    if (event.target == modalContainer) {
        removeShow()
    }
});

