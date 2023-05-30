//Banner Slide Show 
let slideIndex = [1,1];
let slideID = ["slides"]
display(1,0); 

function nextSlide(slide, id) {
  display(slideIndex[id] += slide, id);
}

function display(slide, id) {
  let current = document.getElementsByClassName(slideID[id]);
  if (slide > current.length) {slideIndex[id] = 1}
  if (slide < 1) {slideIndex[id] = current.length}
  for (let i = 0; i < current.length; i++) {
    current[i].style.display = "none";
  }
  current[slideIndex[id]-1].style.display = "block";
}

  function showAlert() {
    alert ("Hello world!");
  }
  
  showAlert();


