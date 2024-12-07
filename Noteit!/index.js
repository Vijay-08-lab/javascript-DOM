//selecting popup box popup overlay and button //
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var abtn = document.getElementById("abtn")
var cancelh = document.getElementById("cancel-book")

abtn.addEventListener("click",function(){
    popupoverlay.style.display ="block"
    popupbox.style.display ="block"
})
cancelh.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display= "none"
    popupoverlay.style.display= "none"
    
})

//selecting container,add-book,book-title-input,book-author-input,book-description-input //
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bookinputtitle =document.getElementById("book-title-input")
var bookinputau = document.getElementById("book-author-input")
var bookinputdes = document.getElementById("book-description-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","container-box")
    div.innerHTML = `<h2>${bookinputtitle.value}</h2>
            <h5>${bookinputau.value}</h5>
            <p>${bookinputdes.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display= "none"
    popupoverlay.style.display= "none"
})

function deletebook(event){
    event.target.parentElement.remove()

}