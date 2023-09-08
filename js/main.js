/*resize navbar on scroll */

let navbar = document.querySelector(".navbar");
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};

/*======================================== typed js.=================================================== */

/* const typed = new typed('.multiple-text', {
    strings: ['Frontend Developer', 'Full Stack Developer', 'Freelancer Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backSDelay: 1000,
    loop: true,
})
 */


/*nav toogler */

const navMenu = document.querySelector(".menu");
navToggle = document.querySelector(".menu-btn");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  })
}

// closing menu when link is clicked

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.querySelector(".menu")
  navMenu.classList.remove("active")
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*dark mode */
const localStore = window.localStorage; 
const darkToggle = document.getElementById("toggle");
const toogleMove = document.querySelector('.toggle-label')
const theme = localStore.getItem("theme")

if (theme === 'dark') {
  document.body.classList.add("dark")
} else {
  document.body.classList.remove("dark")
}

darkToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStore.setItem("theme", "dark")
  } else {
    localStore.removeItem("theme");
  }

})

/*scroll section active link */

const Section = document.querySelectorAll("section[id]")
function scrollActive() {
  const scrollY = window.scrollY
  Section.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".links a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".links a[href*=" + sectionId + "]").classList.remove("active");
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*portfolio item filter */

const FilterContainer = document.querySelector(".portfolio-filter")
filterBtns = FilterContainer.children;
totalFilterbtn = filterBtns.length;
PortfolioItems = document.querySelectorAll(".portfolio-item"),
  totalportfolioItem = PortfolioItems.length;

for (let i = 0; i < totalFilterbtn; i++){
  filterBtns[i].addEventListener('click', function () {
    FilterContainer.querySelector('.active').classList.remove('active')
    this.classList.add('active');
    const filterValue = this.getAttribute("data-filter")
    for (let k = 0; k < totalportfolioItem; k++){
      if (filterValue === PortfolioItems[k].getAttribute("data-category")) {
        PortfolioItems[k].classList.remove('hide')
        PortfolioItems[k].classList.add('show')
      } else {
        PortfolioItems[k].classList.remove("show");
        PortfolioItems[k].classList.add("hide");
      }
      if (filterValue === 'all') {
           PortfolioItems[k].classList.remove("hide");
           PortfolioItems[k].classList.add("show");
      }
    }
  })
}


/*Ligthbox*/

const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for (let i = 0; i < totalportfolioItem; i++){
  PortfolioItems[i].addEventListener('click', function () {
    itemIndex = i;
    changeItem()
    toggleLightbox();
 })
}
function nextItem() {
  if (itemIndex == totalportfolioItem - 1) {
    itemIndex = 0
  } else {
    itemIndex++
  }

  changeItem();
}

function prevItem() {
  if (itemIndex == 0) {
    itemIndex = totalportfolioItem -1;
  } else {
    itemIndex--;
  }

  changeItem();
}


function toggleLightbox() {
  lightbox.classList.toggle("open")
}


function changeItem() {
  imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src")
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = PortfolioItems[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalportfolioItem;
}

/*close lightbox */
lightbox.addEventListener('click', function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
   toggleLightbox()
 }
})


/*email */

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");


const sendEmail = (event) => {
  event.preventDefault()
  
  //serviceID - templateID - #form - publickey
  emailjs
    .sendForm(
      "service_dgb2ku6",
      "template_4ahx31r",
      "#contact-form",
      "cFI2CNcVGpX4ROz1g"
    )
    .then(
      () => {
        //show set message
        contactMessage.textContent = "Mensaje enviado con éxito ✅ ";

        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
      },
      () => {
        //show error
        contactMessage.textContent = "Mensaje no enviado (error) ❌ ";
      }
    );
}
  

contactForm.addEventListener('submit', sendEmail)

/*type js */

const typed = new Typed(".multiple-text", {
  strings: ['Desarrollador Full Stack', 'Desarrollador Front-End', 'Desarrollador Back-End', 'Desarrollador FreeLancer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true

});




/* main scroll reveal */

ScrollReveal({
  /* reset: true, */
  distance: '80px',
  duration: 2000,
  delay: 200
  
});

ScrollReveal().reveal(".home-content, .heading", { origin: 'top' });
ScrollReveal().reveal(
  ".services-container, .projects-box, .contact-item, .contact-form",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  ".services-container, .projects-box, .contact-item, .contact-form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-text h1, .about-image", { origin: "left" });

ScrollReveal().reveal(".home-text p, .about-content", { origin: "right" });