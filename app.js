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
  const note = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 1000),
    content: "",
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  noteContainer.appendChild(noteElement, addNote);

  note.push(noteObject);
  setNotes(note);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  setNotes(notes);
  noteContainer.removeChild(element);
}

function updateNote(id, element) {
  const target = getNotes().filter((note) => note.id == id)[0];

  target.content = element;
  setNotes(notes);
}
