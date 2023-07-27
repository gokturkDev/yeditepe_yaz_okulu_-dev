// Get the modal
var modal = document.getElementById("myModal");
var modalText = document.getElementById("modal-text")
var modalBtn = document.getElementById("modal-button")
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
export function createPopup(popupText, buttonText, buttonCallback=null){
    modal.style.display = "block";
    modalText.innerHTML = popupText
    modalBtn.innerHTML = buttonText
    modalBtn.onclick = function(){
      if (typeof buttonCallback == "function"){
        buttonCallback()
      }
      modal.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}