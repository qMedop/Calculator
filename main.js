let answerp = document.querySelector(".p-answer")
let onep = document.getElementById("input-one")
let twop = document.querySelector(".input-two")
let equalp = document.querySelector(".equal")

let answerM = document.querySelector(".p-answerM")
let oneM = document.getElementById("input-oneM")
let twoM = document.querySelector(".input-twoM")
let equalM = document.querySelector(".equalM")

let answerT = document.querySelector(".p-answerT")
let oneT = document.getElementById("input-oneT")
let twoT = document.querySelector(".input-twoT")
let equalT = document.querySelector(".equalT")

let answerD = document.querySelector(".p-answerD")
let oneD = document.getElementById("input-oneD")
let twoD = document.querySelector(".input-twoD")
let equalD = document.querySelector(".equalD")
equalp.onclick = function m() {
    if(onep.value.length <= 0) {
        console.log("you cant")
    } else {
        answerp.innerHTML = parseInt(onep.value) + parseInt(twop.value) 
    }
}
equalM.onclick = function m() {
    if(oneM.value.length <= 0) {
        console.log("you cant")
    } else {
        answerM.innerHTML = parseInt(oneM.value) - parseInt(twoM.value) 
    }
}
equalT.onclick = function m() {
    if(oneT.value.length <= 0) {
        console.log("you cant")
    } else {
        answerT.innerHTML = parseInt(oneT.value) * parseInt(twoT.value) 
    }
}
equalD.onclick = function m() {
    if(oneD.value.length <= 0) {
        console.log("you cant")
    } else {
        answerD.innerHTML = parseInt(oneD.value) / parseInt(twoD.value) 
    }
}
