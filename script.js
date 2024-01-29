let type = document.querySelector(".type");
let typeSpace = document.querySelector(".typeContainer");

let isOpen = false;

type.addEventListener("click", () => {
    typeSpace.style.display = "block";
    type.style.display = "none";
    isOpen = true;
});

document.body.addEventListener("click", (event) => {
    // Check if the click is outside the specified elements
    if (
        !type.contains(event.target) &&
        !typeSpace.contains(event.target) &&
        isOpen
    ) {
        typeSpace.style.display = "none";
        type.style.display = "block";
        isOpen = false;
    }
});

function resizeTextarea(textarea) {
    // Set the height to the scroll height to allow for growing
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}
