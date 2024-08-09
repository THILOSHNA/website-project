// Add lazy loading to images
function addLazyLoadingToImages() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => image.setAttribute("loading", "lazy"));
}

document.addEventListener("DOMContentLoaded", function () {
  addLazyLoadingToImages();
});

///////////////////////////////-----------------------
function openTabBus(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the active class from all buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab content and add active class to the button that opened it
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openNextTab() {
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    if (tablinks[i].classList.contains("active")) {
      var nextTab = tablinks[(i + 1) % tablinks.length];
      nextTab.click();
      break;
    }
  }
}

// //-----
function openNextTabTrain() {
  var tablinks = document.getElementsByClassName("tablinks-train");
  for (var i = 0; i < tablinks.length; i++) {
    if (tablinks[i].classList.contains("active")) {
      var nextTab = tablinks[(i + 1) % tablinks.length];
      nextTab.click();
      break;
    }
  }
}

// //---
function openNextTabFlight() {
  var tablinks = document.getElementsByClassName("tablinksflight");
  for (var i = 0; i < tablinks.length; i++) {
    if (tablinks[i].classList.contains("active")) {
      var nextTab = tablinks[(i + 1) % tablinks.length];
      nextTab.click();
      break;
    }
  }
}

// Open the default tab
document.getElementById("defaultOpen").click();


// ///-----------------------train
function openTabTrain(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent-train");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the active class from all buttons
  tablinks = document.getElementsByClassName("tablinks-train");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab content and add active class to the button that opened it
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the default tab
document.getElementById("defaultOpenTrain").click();



// ///-----------------------flight
function openTabFlight(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent-flight");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the active class from all buttons
  tablinks = document.getElementsByClassName("tablinks-flight");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab content and add active class to the button that opened it
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the default tab
document.getElementById("defaultOpenFlight").click();



/////////////////------------------------------


// FAQ section
function toggleAccordion(collapseId) {
  const element = document.getElementById(collapseId);
  const button = element.previousElementSibling.querySelector("button");

  if (element.classList.contains("show")) {
    element.classList.remove("show");
    button.classList.add("accordion__button--collapsed");
  } else {
    document
      .querySelectorAll(".accordion__collapse")
      .forEach((collapse) => collapse.classList.remove("show"));
    document
      .querySelectorAll(".accordion__button")
      .forEach((btn) => btn.classList.add("accordion__button--collapsed"));
    element.classList.add("show");
    button.classList.remove("accordion__button--collapsed");
  }
}

// Footer code
document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".ftr-cat-links-col");

  categoryLinks.forEach((link) => {
    link
      .querySelector(".ftr-cat-header")
      .addEventListener("click", function () {
        categoryLinks.forEach((otherLink) => {
          if (otherLink !== link) {
            otherLink.querySelector(".ftr-cat-links").style.display = "none";
          }
        });
        const currentDisplay =
          link.querySelector(".ftr-cat-links").style.display;
        link.querySelector(".ftr-cat-links").style.display =
          currentDisplay === "block" ? "none" : "block";
      });
  });
});

// Hero section
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".mobile-slider");
  const slides = document.querySelectorAll(".mobile-slider img");
  const slideCount = slides.length;
  let currentIndex = 0;
  let startX = 0;
  let endX = 0;

  function goToSlide(index) {
    const offset = slides[0].clientWidth * index;
    slider.style.transform = `translateX(-${offset}px)`;
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    goToSlide(currentIndex);
  }

  document.querySelectorAll(".slider-nav a").forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      goToSlide(index);
    });
  });

  slider.addEventListener(
    "touchstart",
    (event) => (startX = event.touches[0].clientX)
  );
  slider.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX;
    const diffX = endX - startX;
    if (Math.abs(diffX) > 50) {
      diffX > 0 ? previousSlide() : nextSlide();
    }
  });
});

// Might slide card
// document.addEventListener("DOMContentLoaded", function () {
//   const sliders = document.querySelectorAll(".sld_sliderCard__slider");

//   sliders.forEach((slider) => {
//     const slides = slider.querySelectorAll(".sld_sliderCard__slide");
//     const slideCount = slides.length;
//     let currentIndex = 0;
//     let startX = 0;
//     let endX = 0;

//     function goToSlide(index) {
//       const offset = slider.clientWidth * index;
//       slider.style.transform = `translateX(-${offset}px)`;
//       currentIndex = index;
//     }

//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % slideCount;
//       goToSlide(currentIndex);
//     }

//     function previousSlide() {
//       currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//       goToSlide(currentIndex);
//     }

//     // setInterval(nextSlide, 4000);

//     slider.addEventListener(
//       "touchstart",
//       (event) => (startX = event.touches[0].clientX)
//     );
//     slider.addEventListener("touchend", (event) => {
//       endX = event.changedTouches[0].clientX;
//       const diffX = endX - startX;
//       if (Math.abs(diffX) > 50) {
//         diffX > 0 ? previousSlide() : nextSlide();
//       }
//     });
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const sliders = document.querySelectorAll(".sld_sliderCard__slider");

//   sliders.forEach((slider) => {
//     const slides = slider.querySelectorAll(".sld_sliderCard__slide");
//     const slideCount = slides.length;
//     let currentIndex = 0;
//     let startX = 0;
//     let endX = 0;

//     function goToSlide(index) {
//       const offset = slider.clientWidth * index;
//       slider.style.transform = `translateX(-${offset}px)`;
//       currentIndex = index;
//     }

//     function nextSlide() {
//       if (currentIndex < slideCount - 1) {
//         currentIndex++;
//       } else {
//         currentIndex = 0;
//       }
//       goToSlide(currentIndex);
//     }

//     function previousSlide() {
//       currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//       goToSlide(currentIndex);
//     }

//     // Uncomment the following line to enable auto-sliding
//     // setInterval(nextSlide, 4000);

//     slider.addEventListener(
//       "touchstart",
//       (event) => (startX = event.touches[0].clientX)
//     );
//     slider.addEventListener("touchend", (event) => {
//       endX = event.changedTouches[0].clientX;
//       const diffX = endX - startX;
//       if (Math.abs(diffX) > 50) {
//         diffX > 0 ? previousSlide() : nextSlide();
//       }
//     });
//   });
// });





// scroll up btn
document.addEventListener('DOMContentLoaded', function() {
  var backToTopButton = document.getElementById('hs-back-top');
  var showTimeout;

  // Show the button when scrolling down
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Adjust the scroll position to suit your needs
      clearTimeout(showTimeout);
      backToTopButton.style.display = 'block';
      
      // Remove and re-add the animation class to restart the animation
      backToTopButton.classList.remove('bounceInRight');
      void backToTopButton.offsetWidth; // Trigger reflow
      backToTopButton.classList.add('bounceInRight');

      // Hide the button after 1 second
      showTimeout = setTimeout(function() {
        backToTopButton.style.display = 'none';
      }, 1500);
    }
  });

  // Scroll back to the top when the button is clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// ---------------------------- find place to stay---------------------
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.pill__term');
  const tabs = document.querySelectorAll('.swiper-container');

  function showTab(containerId) {
      // Hide all tabs and remove active class from buttons
      tabs.forEach(tab => {
          tab.classList.remove('active');
          if (tab.id === containerId) {
              tab.classList.add('active');
          }
      });

      // Remove active class from all buttons
      buttons.forEach(button => {
          button.classList.remove('active');
          if (button.getAttribute('data-container') === containerId) {
              button.classList.add('active');
          }
      });
  }

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const containerId = this.getAttribute('data-container');
          showTab(containerId);
      });
  });

  // Initially show the apartments tab and set the active button
  showTab('apartments');
});