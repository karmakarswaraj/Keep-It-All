let type = document.querySelector(".type");
let typeSpace = document.querySelector(".typeContainer");

let isOpen = false;
let isOver = false;

type.addEventListener("click", () => {
  typeSpace.style.display = "block";
  type.style.display = "none";
  isOpen = true;
});

document.body.addEventListener("click", (event) => {
  if (
    !type.contains(event.target) &&
    !typeSpace.contains(event.target) &&
    isOpen
  ) {
    typeSpace.style.display = "none";
    type.style.display = "block";
    isOpen = false;
    //saveNotes();
  }
});

function resizeTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

document.querySelectorAll(".notes").forEach((notesContainer) => {
  let buttons = notesContainer.querySelector(".btn");

  notesContainer.addEventListener("mouseenter", () => {
    buttons.style.opacity = 1;
    isOver = true;
  });

  notesContainer.addEventListener("mouseleave", () => {
    buttons.style.opacity = 0;
    isOver = false;
  });
});

// C R U D
//Create Read Update Delete  + Search Sort Filter

function showAllNotes() {
  let allNotes;
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    allNotes = [];
  } else {
    allNotes = JSON.parse(notes);
  }

  let notesContainer = document.querySelector(".notesContainer");
  notesContainer.innerHTML = "";
  allNotes.forEach((note) => {
    notesContainer.innerHTML += `<div class="notes">
                                        <h5>Title</h5>
                                        <p>Description</p>
                                        <div class="btn">
                                            <button class="button-32 notebtn"><img src="./img/delete.svg" alt=""></button>
                                            <button class="button-32 notebtn"><img src="./img/edit.svg" alt=""></button>
                                        </div>
                                        </div>`;
  });
}

function saveAllNotes() {

}
function updateNotes() {
    
}

function deleteNotes() {
    
}
// showAllNotes();


//if title or description is !empty && close is clicked || body is clicked ---> save