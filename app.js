const noteContainer = document.getElementById("right-container");
const addNote = document.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  noteContainer.appendChild(noteElement, addNote);
});

addNote.addEventListener("click", () => addNoteElement());

function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}

function setNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "What To-Do?";

  element.style.fontSize = "20px";
  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const warning = confirm("Are you sure you want to delete?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNoteElement() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 1000),
    content: "",
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);

  // Append the new note before the addNote button
  noteContainer.insertBefore(noteElement, addNote);

  notes.push(noteObject);
  setNotes(notes);
}


function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  setNotes(notes);
  noteContainer.removeChild(element);
}

function updateNote(id, element) {
  const target = getNotes().find((note) => note.id === id);

  if (target) {
    target.content = element.value; // Use element.value to get the updated content
    setNotes(getNotes()); // Save the updated notes to localStorage
  }
}


let search = document.querySelector(".search");
search.addEventListener("keyup", (e) => {
  let value = e.target.value.toLowerCase();
  let notes = document.querySelectorAll(".note");
  
  Array.from(notes).forEach((note) => {
    let title = note.querySelector("textarea").value;
    if(title.toLowerCase().includes(value)) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  })
})
