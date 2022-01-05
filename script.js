// // showNotes();
// function saveInp() {

//     addNoteInp = document.getElementById("addNoteInp").value
//     let notes = localStorage.getItem("notes")
//     if (notes == null) {
//         notesArr = []
//     }
//     else {
//         notesArr = JSON.parse(notes)
//     }
//     notesArr.push(addNoteInp)
//     localStorage.setItem("notes", JSON.stringify(notesArr))
//     console.log(notesArr)
//     // set name of card
//     // space = addNoteInp.indexOf(' ');
//     // cardName = addNoteInp.substr(0, space);
//     // localStorage.setItem(cardName, addNoteInp)
//     // createNote(cardName)
//     // console.log(addNoteInp)
//     //    console.log(i)

//     addNoteInp=' '
//     showNotes();
// }
// let html=""
//     function showNotes() {
//         addNoteInp = document.getElementById("addNoteInp").value
//         let notes = localStorage.getItem("notes")
//         if (notes == null) {
//             notesArr = []
//         }
//         else {
//             notesArr = JSON.parse(notes)
//         }
       
//         notesArr.forEach(function(element,index) {
//             html += `
//             <div class="card " id="noteOut" style="width: 18rem;">
//             <div class="card-body">
//                 <h5 class="card-title" id="cardTitle">Note ${index}</h5>
//                 <p class="card-text" id="card-text" >${element}</p>
//                 <a href="#" class="btn btn-primary" onclick="deleteNote()">Delete</a>
//             </div>
//             `
//         });
//         document.getElementById("output").innerHTML=html
//     }