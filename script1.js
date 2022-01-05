//DISPLAY EXITING NOTES ON SCREEN
if (localStorage.getItem("notes") == null) {
    document.getElementById("output").innerHTML = "Please add your notes"
}
else
    showNotes()


//CONDITION TO CREATE OR USE EXITING ARRAY
if (localStorage.getItem("notes") == null) {
    notesArr = []
}
else {
    notesArr = JSON.parse(localStorage.getItem("notes"))
}

//SAVE NOTES INPUT VALUE IN LOCALSTORAGE
function saveInp() {
    let notes = document.getElementById("addNoteInp").value

    if (notes.slice(0, 1) == "") { //CHECKING SPACE AT BEGINING
        alert("Please enter your Notes blew...! Thank you")
    }
    else {
        notesArr.push(notes)
        localStorage.setItem("notes", JSON.stringify(notesArr))
        showNotes();
        document.getElementById("addNoteInp").value = ''
    }
}

//APPEND NOTES AND SHOW NOTES
function showNotes() {
    let html = ''
    let showNotesArr = JSON.parse(localStorage.getItem("notes"))
    showNotesArr.forEach(function (element, index) {
        document.getElementById("output").innerHTML =
            html += `
        <div class=" notes-output card"  id="${index}" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title" id="cardTitle">Note ${index + 1}</h5>
            <p class="card-text" id="card-text" >${element}</p>
            <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">Delete</button>
        </div>
    </div>
        `
    });

}

//DELETE NOT BUTTON
function deleteNote(index) {
    let showNotesArr = JSON.parse(localStorage.getItem("notes"))
    showNotesArr.splice(index, 1)
    let value = localStorage.setItem("notes", JSON.stringify(showNotesArr))
    if (value == null) {
        location.reload();
    }
    showNotes();

}

//SEARCH IN NOTES
function srch() {
    
    let srchInp = document.getElementById("srchInp").value
    let showNotesArr = JSON.parse(localStorage.getItem("notes"))
    let found = false
    if (srchInp.slice(0, 1) == "") { //CHECK FIRST LETTER OF SPACE CONTAIN EMPTY SPACE OR NOT
        alert("Enter note to be search")
        srchInp = ""
    }
    else {
        
        if (showNotesArr == undefined) {//CONDITION TO CHECK LOCALSTORAGE IS EMPTY OR NOT
            alert("No note is added")
        }
        else {
            //FIND SEATCHED ELEMENT IN LOCALSOTRAGE ARRAY
            showNotesArr.forEach(function (element, index) {
                if (element.includes(srchInp)) {

                    document.getElementById(index).style.border = "1px solid red";
                    found = true;
                }
            });
            if (found == false) //ELEMENT FOUND OR NOT
            {
                alert("Not Found......!")
            }
        }
    }
}
function loadLocation() {
    location.reload();
}