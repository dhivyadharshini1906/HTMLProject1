var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbutton=document.querySelector(".add-button")
var cancelpopup=document.getElementById("cancel-popup")
var title=document.querySelector(".title-input")
var author=document.querySelector(".author-input")
var container=document.querySelector(".container")
var discription=document.querySelector(".discription-input")
var addbook=document.getElementById("add-book")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
            <h4>${author.value}</h4>
            <p>${discription.value}</p>
            <button onclick="deleteitem(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deleteitem(event){
    event.target.parentElement.remove()
}
