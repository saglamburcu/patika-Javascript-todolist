let info = document.querySelector("#task")
let addButton = document.querySelector("#liveToastBtn")
let ulDOM = document.querySelector("#list")
let ulInnerLi = document.querySelectorAll("li")

addButton.addEventListener("click", addedEvent)
function addedEvent (event) {
    event.preventDefault()

    if (info.value) {
        createElement(info.value)
        $("#liveToast").toast("show");
        info.value = "";
    } else {
        $("#liveToast2").toast("show")
    }
   
}

for (let i=0; i<ulInnerLi.length; i++) {
    let span = document.createElement("span")
    span.style.float = "right"
    span.innerHTML = "x"
    span.addEventListener("click",deleteElement) // OR span.onclick = deleteElement
    ulInnerLi[i].append(span)
    ulInnerLi[i].addEventListener("click",marking)
    
}

function createElement (value) {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${value}`
    ulDOM.append(liDOM)
  
    //the same process is done for added new elements.
    let span = document.createElement("span")
    span.style.float = "right"
    span.innerHTML = "x"
    span.addEventListener("click",deleteElement)
    liDOM.append(span)
    liDOM.addEventListener("click",marking)
}

function deleteElement() {
    this.parentElement.remove()
}

function marking() {
    this.classList.toggle("checked")
   
}