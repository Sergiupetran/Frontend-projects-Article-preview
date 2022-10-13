window.addEventListener('load', function () {
  document.querySelector(".button").addEventListener("click", function(){
    document.querySelector(".active").style.display = "block";
});
document.querySelector(".button").addEventListener("click", function(){
    document.querySelector(".second-container").style.display = "none";
  });
});