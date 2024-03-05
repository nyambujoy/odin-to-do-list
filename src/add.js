
const listNotes = []

class Notes {
    constructor(note) {
        this.note = note
    }

    creatingNotes(note) {
        const newNote = new Notes(note)
        listNotes.push(newNote)
    }

    static handleModal() {
        const modal = document.createElement('dialog');
        modal.classList.add("modal");

        // Append the dialog to the body
        document.body.appendChild(modal);

        // Show the modal
        modal.showModal();
        const title = document.createElement("h2")
        title.id = 'title'
        title.setAttribute('contenteditable', 'true');
        title.textContent = 'Editable Title';

        const displayP = document.createElement("p");
        displayP.setAttribute("contenteditable", "true");
        // displayP.classList.add("para");
        displayP.id = 'para'
        displayP.textContent = 'joyliz hello';

        const saveBtn = document.createElement("button")
        saveBtn.innerHTML = 'Save'
        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = 'delete'
        const closeBtn = document.createElement("button")
        closeBtn.innerHTML = 'X'

        const timer = document.createElement("div")
        timer.classList.add("timer")


        const start = document.createElement("span")
        start.innerHTML = 'start'
        const stop = document.createElement("span")
        stop.innerHTML = 'stop'
        const howLong = document.createElement("span")
        howLong.innerHTML = 'how long'
        timer.append(start, stop, howLong)


        const lastLine = document.createElement("div")
        lastLine.classList.add("lastLine")
        lastLine.append(saveBtn, deleteBtn, closeBtn)



        modal.append(title, displayP, lastLine)

        // document.body.appendChild(modal);
        const sideBar = document.querySelector(".sidebar")
        saveBtn.addEventListener("click", () => {
            const noteTitle = title.textContent;
            const noteContent = displayP.textContent;

            // Create a new instance of the Notes class and add the note to the listNotes array
            const newNote = new Notes(`${noteTitle}: ${noteContent}`);
            newNote.creatingNotes(`${noteTitle}: ${noteContent}`);

            // Close the modal
            modal.close();

            Notes.appendingNote();


        })

        deleteBtn.addEventListener("click", () => {
            title.textContent = ''
            displayP.textContent = ''

        })

        closeBtn.addEventListener("click", () => {
            modal.close()
        })

    }

    static appendingNote() {
        const sideBar = document.querySelector(".sidebar");

        // Clear the sidebar before appending new notes
        sideBar.innerHTML = "";

        // Loop through the listNotes array and append each note to the sidebar
        listNotes.forEach(noteObj => {
            const currentNote = document.createElement('div');
            currentNote.classList.add("currentNote")
            currentNote.textContent = noteObj.note; // Extract the note property
            sideBar.appendChild(currentNote);
        });
    }

    static handleTime() {

    }
}

export { Notes };