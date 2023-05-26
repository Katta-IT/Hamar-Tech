const tygg = document.getElementById('circles');

for (let index = 0; index < 10; index++) {
    const pol = document.createElement("li");
    pol.setAttribute("id", "ball");
    tygg.appendChild(pol);
    
}


function getRandomPercentage() {
    return Math.floor(Math.random() * 100) + "%";
  }
  
  function getRandomDelay() {
    return Math.floor(Math.random() * 1) + "s";
  }
  
  function getRandomDuration() {
    return Math.floor(Math.random() * 30) + "s";
  }
  
  var circles = document.querySelectorAll(".circles li");
  
  circles.forEach(function(circle) {
    circle.style.left = getRandomPercentage();
    circle.style.animationDelay = getRandomDelay();
    circle.style.animationDuration = getRandomDuration();
    circle.style.width = getRandomWidth();
    circle.style.height = getRandomHeight();
  });

  function getRandomWidth(){
    return Math.floor(Math.random() * 400) + "px";
  }
  
  function getRandomHeight(){
    return Math.floor(Math.random() * 400) + "px";
  }


function linkToElement() {
  var target = document.getElementById('targetElement');
  target.id = 'linkedElement';
  location.href = '#linkedElement';
}
