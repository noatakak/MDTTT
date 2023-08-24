const starfield = document.querySelector(".starfield");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function create_stars(){
    const star = document.createElement('div');
    star.classList.add('star');

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    const randomColor = getRandomColor()

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.animationDuration = `${duration}s`;
    star.style.backgroundColor = randomColor;
    star.style.zIndex = -5;

    starfield.appendChild(star);
}

function updateNavSize() {
    const sun = document.querySelector('.sun');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const sunSize = Math.min(viewportWidth, viewportHeight) * 0.3;
    sun.style.width = `${sunSize}px`;
    sun.style.height = `${sunSize}px`;

    const sunGradientColor = '#fddf47';
    sun.style.background = `radial-gradient(circle, white .1%, ${sunGradientColor})`;

    const ring2 = document.querySelector('.ring2');
    ring2.style.heigth = `${Math.min(viewportWidth, viewportHeight)}px`;
    ring2.style.width = ring2.style.heigth

    const buttons = document.querySelector('.button_container')
    buttons.style.width = `${viewportWidth * 0.5}px`;
    buttons.style.height = `${sunSize}px`;

    const planetSize = Math.min(viewportWidth, viewportHeight) * 0.1;
    const planet1 = document.querySelector('.portfolio_button');
    const planet2 = document.querySelector('.resume_button');
    const planet3 = document.querySelector('.about_button');

    planet1.style.width = `${planetSize}px`;
    planet1.style.height = `${planetSize}px`;
    planet2.style.width = `${planetSize}px`;
    planet2.style.height = `${planetSize}px`;
    planet3.style.width = `${planetSize}px`;
    planet3.style.height = `${planetSize}px`;
}

updateNavSize();
window.addEventListener('resize', updateNavSize);

for(i = 0; i < 500; i++){
    create_stars()
}

const sunDiv = document.querySelector('.sun');
const ring1 = document.querySelector('.ring1');
const ring2 = document.querySelector('.ring2');
const ring3 = document.querySelector('.ring3');
const portfolioDiv = document.querySelector('.portfolio_button');
const resumeDiv = document.querySelector('.resume_button');
const aboutDiv = document.querySelector('.about_button');

function updateRingSize(sunDiv, planetDiv, ring) {
  const sunRect = sunDiv.getBoundingClientRect();
  const planetRect = planetDiv.getBoundingClientRect();

  const sunCenterX = sunRect.left + sunRect.width / 2;
  const sunCenterY = sunRect.top + sunRect.height / 2;

  const planetCenterX = planetRect.left + planetRect.width / 2;
  const planetCenterY = planetRect.top + planetRect.height / 2;

  const distanceX = sunCenterX - planetCenterX;
  const distanceY = sunCenterY - planetCenterY;
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  ring.style.width = distance * 2 + 'px';
  ring.style.height = ring.style.width;
}

updateRingSize(sunDiv, portfolioDiv, ring1);
updateRingSize(sunDiv, resumeDiv, ring2);
updateRingSize(sunDiv, aboutDiv, ring3);

window.addEventListener('resize', () => {
  updateRingSize(sunDiv, portfolioDiv, ring1);
  updateRingSize(sunDiv, resumeDiv, ring2);
  updateRingSize(sunDiv, aboutDiv, ring3);  
});

const window_portfolio = document.querySelector('.window_portfolio');
const window_resume = document.querySelector('.window_resume');
const window_about = document.querySelector('.window_about');
const socialBox = document.querySelector('.socials');

function updateWindowSize(popup) {
  const popup_rect = popup.getBoundingClientRect();
  const socials_rect = socialBox.getBoundingClientRect();

  const distance =  socials_rect.top - popup_rect.top
  popup.style.height = `${distance-15}px`
}

updateWindowSize(window_portfolio)
updateWindowSize(window_resume)
updateWindowSize(window_about)

window.addEventListener('resize', () => {
  updateWindowSize(window_portfolio)
  updateWindowSize(window_resume)
  updateWindowSize(window_about)
});



function toggleVisibility(id) {
  console.log("clicked")
  var element = document.getElementById(id);
  if (element.style.visibility == "hidden") {
      element.style.visibility = "visible";
  } else {
      element.style.visibility = "hidden";
  }
  if (id != "window_portfolio") {
    document.getElementById('window_portfolio').style.visibility = "hidden";
  }
  if (id != "window_resume") {
    document.getElementById('window_resume').style.visibility = "hidden";
  }
  if (id != "window_about") {
    document.getElementById('window_about').style.visibility = "hidden";
  }
}

function exit() {
  document.getElementById('window_portfolio').style.visibility = "hidden";
  document.getElementById('window_resume').style.visibility = "hidden";
  document.getElementById('window_about').style.visibility = "hidden";
}

exit()