document.addEventListener('DOMContentLoaded', (e) => {

  const projects = [
    {
      name: 'Hangapp PWA',
      descriptions: {
        short: 'A full-featured Hangman game, built as a Progressive Web App.',
        long: 'This Hangman game includes 3 difficulty modes, 2 color themes. The app fetches definitions from m-w.com and caches them using localStorage in the background.'
      },
      tags: ['JavaScript', 'PWA', 'Fetch API', 'SVG Animation'],
      links: {
        github: 'https://github.com/kylesureline/hangapp',
        demo: '/hangapp/'
      },
      cardType: 'fader',
      images: {
        fader: {
          bottom: 'hangapp-sidebar.jpg',
          top: 'hangapp.jpg'
        },
        modal: 'hangapp-modal.jpg'
      }
    },
    {
      name: 'JSON API',
      descriptions: {
        short: 'A prototype for an Awesome Startup employee directory. Uses the Fetch API to retrieve data from a server.',
        long: 'This app retrieves fake employees from <a href="https://randomuser.me/" target="_blank">The Random User Generator API</a> using the Fetch API. You can click on a user to see more info displayed on a modal, and search for a user by their name.'
      },
      tags: ['HTML', 'CSS', 'Fetch API', 'Modal', 'Search'],
      links: {
        github: 'https://github.com/kylesureline/awesome-startup',
        demo: '/awesome-startup/'
      },
      cardType: 'fader',
      images: {
        fader: {
          bottom: 'awesome-startup-overlay.jpg',
          top: 'awesome-startup.jpg'
        },
        modal: 'awesome-startup-modal.jpg'
      }
    },
    {
      name: 'Web App Dashboard',
      descriptions: {
        short: 'A beautiful, web dashboard complete with JavaScript-driven charts and graphs.',
        long: 'Designed using Grid Layout, this prototype is a mockup for a powerful, responsive, web app. It uses the <a href="https://www.chartjs.org" target="_blank">chart.js</a> library to render charts and localStorage to save user preferences.'
      },
      tags: ['HTML', 'CSS', 'SVG', 'Grid'],
      links: {
        github: 'https://github.com/kylesureline/web-app-dashboard',
        demo: '/web-app-dashboard/'
      },
      cardType: 'slider',
      images: {
        slider: 'web-app-dashboard-full.jpg',
        modal: 'web-app-dashboard-modal.jpg'
      }
    },
    {
      name: 'Photo Gallery',
      descriptions: {
        short: 'An interactive photo gallery using JavaScript and jQuery.',
        long: 'This photo gallery is built using jQuery and a lightbox plugin called <a href="https://dimsemenov.com/plugins/magnific-popup/" target="_blank">Magnific Popup</a>. It displays thumbnails, which can be clicked to load the full size image. The image gallery can be searched.'
      },
      tags: ['HTML', 'CSS', 'jQuery', 'Modal', 'Search'],
      links: {
        github: 'https://github.com/kylesureline/photo-gallery',
        demo: '/photo-gallery/'
      },
      cardType: 'fader',
      images: {
        fader: {
          bottom: 'photo-gallery-overlay.jpg',
          top: 'photo-gallery.jpg'
        },
        modal: 'photo-gallery-modal.jpg'
      }
    },
    {
      name: 'Web Style Guide',
      descriptions: {
        short: 'A Sass project using partials, variables, extends, and mixins to apply styles and classes to a style guide page.',
        long: 'A Sasstronautical exploration in creating a style guide. For this project, I built a style guide using Sass partials, variables, mixins and extends.'
      },
      tags: ['HTML', 'CSS', 'Sass'],
      links: {
        github: 'https://github.com/kylesureline/web-style-guide',
        demo: '/web-style-guide/'
      },
      cardType: 'slider',
      images: {
        slider: 'web-style-guide-full.jpg',
        modal: 'web-style-guide-modal.jpg'
      }
    },
    {
      name: 'Registration Form',
      descriptions: {
        short: 'A responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes.',
        long: 'An HTML5 form, built using semantic markup, including fieldsets, radio buttons, checkboxes, a textarea and a partridge and a pear tree.'
      },
      tags: ['HTML', 'CSS', 'Form'],
      links: {
        github: 'https://github.com/kylesureline/registration-form',
        demo: '/registration-form/'
      },
      cardType: 'slider',
      images: {
        slider: 'registration-form-full.jpg',
        modal: 'registration-form-modal.jpg'
      }
    }
  ];
  const icons = {
    github: `
<svg class="icon github" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
  <path d="M16 .395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182.8.148 1.094-.347 1.094-.77 0-.381-.015-1.642-.022-2.979-4.452.968-5.391-1.888-5.391-1.888-.728-1.849-1.776-2.341-1.776-2.341-1.452-.993.11-.973.11-.973 1.606.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33.143-1.034.558-1.74 1.016-2.14-3.554-.404-7.29-1.777-7.29-7.907 0-1.747.625-3.174 1.649-4.295-.166-.403-.714-2.03.155-4.234 0 0 1.344-.43 4.401 1.64 1.276-.355 2.645-.532 4.005-.539 1.359.006 2.729.184 4.008.539 3.054-2.07 4.395-1.64 4.395-1.64.871 2.204.323 3.831.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895.574.497 1.085 1.47 1.085 2.963 0 2.141-.019 3.864-.019 4.391 0 .426.288.925 1.099.768C27.421 29.457 32 23.462 32 16.395c0-8.837-7.164-16-16-16z"></path>
</svg>`,
    demo: `
<svg class="icon demo" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
  <path d="M0 2v20h32V2H0zm30 18H2V4h28v16zm-9 4H11l-1 4-2 2h16l-2-2z"></path>
</svg>`,
    close: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"/>
</svg>`,
    arrow_left: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"/>
</svg>`,
    arrow_right: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <path d="M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"/>
</svg>`
  };
  const body = document.querySelector('body');
  const cardsDiv = document.querySelector('.cards');
  const navLinks = document.querySelector('nav ul');
  const card3x5 = document.querySelector('.card-3x5');

  // functions
  function preloadImages() {
    if (document.getElementById) {
  		document.getElementById("preload-01").style.background = "url(images/hangapp-modal.jpg) no-repeat -9999px -9999px";
  		document.getElementById("preload-02").style.background = "url(images/awesome-startup-modal.jpg) no-repeat -9999px -9999px";
  		document.getElementById("preload-03").style.background = "url(images/web-app-dashboard-modal.jpg) no-repeat -9999px -9999px";
      document.getElementById("preload-04").style.background = "url(images/photo-gallery-modal.jpg) no-repeat -9999px -9999px";
      document.getElementById("preload-05").style.background = "url(images/web-style-guide-modal.jpg) no-repeat -9999px -9999px";
      document.getElementById("preload-06").style.background = "url(images/registration-form-modal.jpg) no-repeat -9999px -9999px";
  	}
  }

  function displayModal(id) {

    function removeModal() {
      body.removeChild(modal);
      body.removeEventListener('keyup', keyPress);
    }

    function moveRight() {
      removeModal();
      if(id < (projects.length - 1)) {
        displayModal(id + 1);
      } else {
        displayModal(0);
      }
    }

    function moveLeft() {
      removeModal();
      if(id > 0) {
        displayModal(id - 1);
      } else {
        displayModal(projects.length - 1);
      }
    }

    function keyPress(e) {

      if(e.key === 'Escape') {
        removeModal();
      } else if(e.key === 'ArrowRight') {
        moveRight();
      } else if(e.key === 'ArrowLeft') {
        moveLeft();
      }
    }

    function getTags(tags) {
      let lis = tags.reduce((acc, tag) => {
        return acc + `<li>${tag}</li>`
      }, '');
      return lis;
    }

    let projectObj = projects[id];

    let modal = createElement('div', 'className', 'modal');
    let content = `
<div class="modal-content">
  <span class="close">${icons.close}</span>
  <div class="image feature" style="background-image: url('images/${projectObj.images.modal}');">
  </div>
  <div class="info">
    <span class="arrow left">${icons.arrow_left}</span>
    <span class="arrow right">${icons.arrow_right}</span>
    <h2>${projectObj.name}</h2>
    <p>${projectObj.descriptions.long}</p>
    <div class="links">
      <ul>
        <li>
          <a href="${projectObj.links.github}" target="_blank">
            ${icons.github}
          </a>
        </li>
        <li>
          <a href="${projectObj.links.demo}" target="_blank">
            ${icons.demo}
          </a>
        </li>
      </ul>
    </div>
    <div class="tags">
      <ul>
        ${getTags(projectObj.tags)}
      </ul>
    </div>
  </div>
</div>`;
    modal.innerHTML = content;

    modal.querySelector('.close').addEventListener('click', (e) => {
      removeModal();
    });

    modal.querySelector('.right').addEventListener('click', moveRight);

    modal.querySelector('.left').addEventListener('click', moveLeft);

    modal.addEventListener('click', (e) => {
      if(e.target.className === 'modal') {
        removeModal();
      }
    });

    body.addEventListener('keyup', keyPress);

    body.insertBefore(modal, body.firstChild);
  }

  function createElement(tagName, attribute, value) {
    let element = document.createElement(tagName);
    element[attribute] = value;
    return element;
  }

  function placeCards(cardObjects) {

    function getImages(cardObject) {
      if(cardObject.cardType === 'fader') {
        let bottom = `<img class="bottom" src="images/${cardObject.images.fader.bottom}" alt="${cardObject.name}">`;
        let top = `<img class="top" src="images/${cardObject.images.fader.top}" alt="${cardObject.name}">`;
        return bottom + top;
      } else if(cardObject.cardType === 'slider') {
        return `<img src="images/${cardObject.images.slider}" alt="${cardObject.name}">`;
      }
    }

    cardObjects.forEach((cardObject, index) => {
      let card = `
<div class="card ${cardObject.cardType}" id="card-${index}">
  <div class="screenshot">
    ${getImages(cardObject)}
  </div>
  <div class="info">
    <h3>${cardObject.name}</h3>
    <p class="description">${cardObject.descriptions.short}</p>
  </div>
</div>`;
      cardsDiv.innerHTML += card;
    });

  } // end placeCards()

  function getCardDiv(target) {
    while(target.parentNode) {
      target = target.parentNode;
      if(target.id.includes('card')) {
        return target;
      } else if(target.id === 'portfolio') {
        return null;
      }
    }
    return null;
  }

  // event listeners
  cardsDiv.addEventListener('mouseover', (e) => {

    let selectedCard = getCardDiv(e.target);
    let cards = cardsDiv.querySelectorAll('.card');

    if(selectedCard) {
      cards.forEach(card => {
        if(card.id !== selectedCard.id) {
          card.classList.add('faded');
        }
      });
    }

  });

  cardsDiv.addEventListener('mouseout', (e) => {
    let cards = cardsDiv.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.remove('faded');
    });
  });

  cardsDiv.addEventListener('click', (e) => {
    let selectedCard = getCardDiv(e.target);
    if(selectedCard) {
      let id = parseInt(selectedCard.id.split('-')[1]);
      displayModal(id);
    }
  });

  navLinks.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
      let target = e.target;
      let scrollTo = '#' + target.href.split('#')[1];
      if(scrollTo === '#home') {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        document.querySelector(scrollTo).scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  card3x5.addEventListener('click', (e) => {
    let inner = card3x5.querySelector('.inner');
    if(inner.classList.contains('flipped')) {
      inner.classList.remove('flipped');
    } else {
      inner.classList.add('flipped');
    }
  });

  // setup the page:
  preloadImages();
  placeCards(projects);

});
