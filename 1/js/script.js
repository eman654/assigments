let number = document.getElementById("number")

let count = 0


function abc() {
	count = count + 1
	number.innerText = count
}

let saveEl = document.getElementById("save-el")


function save() {
   let something = count + " " + " - "
   saveEl.innerText += something
}