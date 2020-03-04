/* Script copied from w3schools - modified for this website*/

// Get the modal
var modal = document.getElementById("myModal");

var img = document.getElementById("imgOne");
var modalImg = document.getElementById("img01");// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("imgTwo");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("imgThree");
var modalImg = document.getElementById("img01");// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("imgFour");
var modalImg = document.getElementById("img01");// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("imgFive");
var modalImg = document.getElementById("img01");// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("imgSix");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("imgSeven");
var modalImg = document.getElementById("img01");// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("imgEight");
var modalImg = document.getElementById("img01");// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}