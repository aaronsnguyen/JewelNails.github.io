//Slide show
let slideIndex = [1,1];
let slideID = ["slidesBanner"]
let dotID = ["dotSlide"]
display(1,0); 

function nextSlide(slide, id) {
  display(slideIndex[id] += slide, id);
}
function dotSlideCurrent(slide, id) {
  display(slideIndex[id] = slide, id);
}
function display(slide, id) {
  let i;
  let current = document.getElementsByClassName(slideID[id]);
  let curDot = document.getElementsByClassName(dotID[id]);
  if (slide > current.length) {slideIndex[id] = 1}
  if (slide < 1) {slideIndex[id] = current.length}
  for (i = 0; i < current.length; i++) {
    current[i].style.display = "none";
  }
  for (i = 0; i < curDot.length; i++) {
    curDot[i].className = curDot[i].className.replace(" activeDot", "");
  }
  current[slideIndex[id]-1].style.display = "block";
  curDot[slideIndex[id]-1].className += " activeDot";
}

