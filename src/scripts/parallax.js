const parallax = document.querySelector(".parallax");
const layers = parallax.children;
const last = parallax.lastElementChild;
const grow = last.lastElementChild;
  
function move(wScroll) {
  
  Array.from(layers).forEach(layer => {
    const lspeed = layer.dataset.speed;
    const strafe = lspeed * wScroll / 60;
    layer.style.transform = `translateY(-${strafe}%)`;
    grow.style.height = 4 + strafe + "%";
    
  });
  
}

window.addEventListener("scroll", function () {
  const wScroll = window.pageYOffset;
  move(wScroll);

});