let type = document.querySelector(".type");
let typeSpace = document.querySelector(".typeContainer");
let saveBtn = document.getElementById("save");
let closeBtn = document.getElementById("close");

let isOpen = false;


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
    //if title or description is !empty && close is clicked || body is clicked ---> save
    //saveAllNotes();
  }
});

function resizeTextarea(textarea) {
  textarea.style.height = "30px";
  textarea.style.height = textarea.scrollHeight + "px";
}

document.querySelectorAll(".notes").forEach((notesContainer) => {
  let buttons = notesContainer.querySelector(".btn");
  let isOver = false;

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
// Create Read Update Delete  + Search Sort Filter

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
  allNotes.forEach((note, index) => {
    notesContainer.innerHTML += `<div class="notes">
                                        <h5>${note.title}</h5>
                                        <p>${note.description}</p>
                                        <div class="btn">
                                            <button class="button-32 notebtn btn" onclick="deleteNotes(${index})"><img src="./img/delete.svg" alt=""></button>
                                            <button class="button-32 notebtn btn" onclick="updateNotes(${index})"><img src="./img/edit.svg" alt=""></button>
                                        </div>
                                        </div>`;
  });
}

function saveAllNotes() {
  let allNotes;
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    allNotes = [];
  } else {
    allNotes = JSON.parse(notes);
  }
  let noteObj = {
    title: title.value,
    description: description.value,
  };
  allNotes.push(noteObj);

  localStorage.setItem("notes", JSON.stringify(allNotes));
  showAllNotes();
}

showAllNotes();

saveBtn.addEventListener("click", () => {
  saveAllNotes();
  typeSpace.style.display = "none";
  type.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  typeSpace.style.display = "none";
  type.style.display = "block";
});

function deleteNotes(index) {
  let allNotes = JSON.parse(localStorage.getItem("notes")) || [];
    //Alert
    if (confirm("Are you sure you want to delete this note?")) {
      //Delete
      allNotes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(allNotes));
      showAllNotes();
    }
}

function updateNotes(index) {
  
}