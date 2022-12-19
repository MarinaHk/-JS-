let images = [{
  url: "images/image1.jpg",
  city: "Rostov-on-Don  LCD admiral",
  apartment: "81 m2",
  time: "3.5 months", 
  title: "Rostov-on-Don, Admiral"
}, {
  url: "images/image2.jpg",
  city: "Sochi Thieves",
  apartment: "105 m2",
  time: "4 months", 
  title: "Sochi Thieves"
}, {
  url: "images/image3.jpg",
  city: "Rostov-on-Don Patriotic",
  apartment: "93 m2",
  time: "3 months", 
  title: "Rostov-on-Don Patriotic"
}];

function initSlider(images, options) {
  if (!images || !images.length) return;
  
  options = options || {
    dots: false,
    titles: false,
    citys: false,
    apartments: false,
    times: false,
    autoplay: false,
    autoplayInterval: 3000
  }
  
  const sliderWrapper = document.querySelector(".slider");
  const sliderImages = sliderWrapper.querySelector(".slider__images");
  const sliderArrows = sliderWrapper.querySelector(".slider__arrows");
  const sliderKarusel = document.querySelector(".projects-navig_item");
  
  initImages();
  initArrows();
  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }
  
  if (options.citys) {
    initCitys();
  }
  
  if (options.apartments) {
    initApartments();
  }
  
   if (options.times) {
    initTimes();
  }
    
  function initImages() {
    images.forEach((image, index) => {
      let imageElement = document.createElement("div");
      imageElement.className = `image n${index} ${index? "" : "active"}`;
      imageElement.dataset.index = index;
      imageElement.style.backgroundImage = `url(${image.url})`;
      sliderImages.appendChild(imageElement);
    });
  }
  
  function initArrows() {
    let lastIndex = images.length - 1;
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? lastIndex : curNumber - 1;
        } else {
          nextNumber = curNumber === lastIndex? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(`.n${num}`).classList.add("active");
    
    if (options.titles) {
      let title = document.querySelector(".projects-navig_item");
    /* titles.querySelector(".active").classList.remove("active");
      titles.querySelector(`.n${num}`).classList.add("active");*/
      
     if (images[num].title) {
        title.innerText = images[num].title;
      }
    }
    
     if (options.dots) {
      let dotsWrapper = document.querySelector(".slider__dots");
      dotsWrapper.querySelector(".active").classList.remove("active");
      dotsWrapper.querySelector(`.n${num}`).classList.add("active");
    }
      
    if (options.citys) {
      let city = document.querySelector(".span_h3");
      if (images[num].city) {
      city.innerText = images[num].city;
    }}
    
     if (options.apartments) {
      let apartment = document.querySelector(".span_h4");
      if (images[num].apartment) {
      apartment.innerText = images[num].apartment;
    }}
    
     if (options.times) {
      let time = document.querySelector(".span_h5");
      if (images[num].time) {
      time.innerText = images[num].time;
    }}
       
  }
  
  function initCitys() {
    let citys = document.querySelector('.span_h3');
    citys.dataset.index = index;
  }
  
  function initApartments() {
    let apartments = document.querySelector('.span_h4');
    apartments.dataset.index = index;
  }
  
    function initTimes() {
    let times = document.querySelector('.span_h5');
    times.dataset.index = index;
  }
  
  function initDots() {
    let dotsWrapper = document.createElement("div");
    dotsWrapper.className = "slider__dots";
    images.forEach((image, index) => {
      let dot = document.createElement("div");
      dot.className = `slider__dots-item n${index} ${index? "" : "active"}`;
      dot.dataset.index = index;
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
      dotsWrapper.appendChild(dot);
    });
    sliderWrapper.appendChild(dotsWrapper);
  }
  
  function initTitles() {
    let titles = document.querySelector(".projects-navig");
     titles.dataset.index = index;
        
     images.forEach((image, index) => {
      let title = document.querySelector(".projects-navig_item"); //создание точнки
      title.className = `.projects-navig_item n${index} ${index? "" : "active"}`; //добавление стиля, порядкового номера
      title.dataset.index = index;
      title.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
      titles.appendChild(title);
    });
    sliderKarusel.appendChild(titles);
  }
  
 
  function initAutoplay() {
    setInterval(() => {
      let currentNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = currentNumber === images.length - 1? 0 : currentNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let sliderOptions = {
    dots: true,
    titles: true,
    citys: true,
    apartments: true,
    times: true,
    autoplay: false,
    autoplayInterval: 3000
  }
  initSlider(images, sliderOptions);
});