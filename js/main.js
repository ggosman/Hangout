var rellax = new Rellax('.rellax');

function preloader() {
   if (!sessionStorage.isVisited) {
      sessionStorage.isVisited = 'true';
      setInterval(() => {
         let p = $('#container');
         p.css('opacity', 0);
         setInterval(
            () => p.remove(),
            parseInt(p.css('--duration')) * 1000
         );
         window.localStorage.setItem('preloaderIsShown', true);
      }, 3800);
   }
   else {
      $('#container').css('display', 'none');
   }
}

preloader();

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   window.addEventListener('scroll', function () {
      const aboutus = document.querySelector('.aboutus');

      const aboutus_one = document.querySelector('.aboutus__image-one');
      const aboutus_two = document.querySelector('.aboutus__image-two');
      const aboutus_three = document.querySelector('.aboutus__image-three');

      yOffset = (window.pageYOffset - (aboutus.offsetTop + 700)) / 5; yOffsetDeg = (window.pageYOffset - (aboutus.offsetTop + 500)) / 15; yOffsetLower = (2000 - window.pageYOffset) / 150; yOffsetMin = (600 + window.pageYOffset) / 1900;
      TwoyOffset = (window.pageYOffset - (aboutus.offsetTop + 700)) / 10; TwoyOffsetDeg = (window.pageYOffset - (aboutus.offsetTop + 500)) / 20; TwoyOffsetLower = (2000 - window.pageYOffset) / 350; TwoyOffsetMin = (600 + window.pageYOffset) / 2000;
      ThreeyOffset = (window.pageYOffset - (aboutus.offsetTop + 700)) / 12; ThreeyOffsetDeg = (window.pageYOffset - (aboutus.offsetTop + 400)) / 26; ThreeyOffsetLower = (2000 - window.pageYOffset) / 450; ThreeyOffsetMin = (600 + window.pageYOffset) / 2100;

      if (window.pageYOffset < aboutus.offsetTop + 500) {
         aboutus_one.style.transform = `translate3d(${yOffset}%, ${yOffsetLower}%, 0px) scale(${yOffsetMin}) rotate(${yOffsetDeg}deg)`;
         aboutus_two.style.transform = `translate3d(${TwoyOffset}%, ${TwoyOffsetLower}%, 0px) scale(${TwoyOffsetMin}) rotate(${TwoyOffsetDeg}deg)`;
         aboutus_three.style.transform = `translate3d(${ThreeyOffset}%, ${ThreeyOffsetLower}%, 0px) scale(${ThreeyOffsetMin}) rotate(${ThreeyOffsetDeg}deg)`;
      }

      const tips = document.querySelector('.tips');

      const tips_one = document.querySelector('.tips__image-one');
      const tips_two = document.querySelector('.tips__image-two');

      yOffsetSec = (window.pageYOffset - (tips.offsetTop + 600)) / 5; yOffsetDegSec = (window.pageYOffset - (tips.offsetTop - 200)) / 45; yOffsetLowerSec = (tips.offsetTop - window.pageYOffset) / 150; yOffsetMinSec = (tips.offsetTop + window.pageYOffset) / 5000;
      TwoyOffsetSec = (window.pageYOffset - (tips.offsetTop + 800)) / 10; TwoyOffsetDegSec = (window.pageYOffset - (tips.offsetTop - 400)) / 25; TwoyOffsetLowerSec = (tips.offsetTop - window.pageYOffset) / 350; TwoyOffsetMinSec = (tips.offsetTop + window.pageYOffset) / 5500;

      if (window.pageYOffset < tips.offsetTop + 500) {
         tips_one.style.transform = `translate3d(${yOffsetSec}%, ${yOffsetLowerSec}%, 0px) scale(${yOffsetMinSec}) rotate(${yOffsetDegSec}deg)`;
         tips_two.style.transform = `translate3d(${TwoyOffsetSec}%, ${TwoyOffsetLowerSec}%, 0px) scale(${TwoyOffsetMinSec}) rotate(${TwoyOffsetDegSec}deg)`;
      }

      const xz = document.querySelector('.xz');

      const xz_one = document.querySelector('.xz__image-one');
      const xz_two = document.querySelector('.xz__image-two');

      yOffsetThree = (window.pageYOffset - (xz.offsetTop + 700)) / 15; yOffsetDegThree = (window.pageYOffset - (xz.offsetTop + 200)) / 35; yOffsetLowerThree = (2000 - window.pageYOffset) / 200; yOffsetMinThree = window.pageYOffset / 3300;
      TwoyOffsetThree = (window.pageYOffset - (xz.offsetTop + 700)) / 30; TwoyOffsetDegThree = (window.pageYOffset - (xz.offsetTop + 600)) / 20; TwoyOffsetLowerThree = (2000 - window.pageYOffset) / 350; TwoyOffsetMinThree = window.pageYOffset / 3300;

      if (window.pageYOffset < xz.offsetTop + 500) {
         xz_one.style.transform = `translate3d(${yOffsetThree}%, ${yOffsetLowerThree}%, 0px) scale(${yOffsetMinThree}) rotate(${yOffsetDegThree}deg)`;
         xz_two.style.transform = `translate3d(${TwoyOffsetThree}%, ${TwoyOffsetLowerThree}%, 0px) scale(${TwoyOffsetMinThree}) rotate(${TwoyOffsetDegThree}deg)`;
      }
   });
}
else {
   window.addEventListener('scroll', function () {
      const aboutus = document.querySelector('.aboutus');

      const aboutus_one = document.querySelector('.aboutus__image-one');
      const aboutus_two = document.querySelector('.aboutus__image-two');
      const aboutus_three = document.querySelector('.aboutus__image-three');

      yOffset = (window.pageYOffset - (aboutus.offsetTop + 700)) / 5; yOffsetDeg = (window.pageYOffset - (aboutus.offsetTop + 500)) / 15; yOffsetLower = (2000 - window.pageYOffset) / 150; yOffsetMin = (600 + window.pageYOffset) / 1300;
      TwoyOffset = (window.pageYOffset - (aboutus.offsetTop + 700)) / 10; TwoyOffsetDeg = (window.pageYOffset - (aboutus.offsetTop + 500)) / 20; TwoyOffsetLower = (2000 - window.pageYOffset) / 350; TwoyOffsetMin = (600 + window.pageYOffset) / 1400;
      ThreeyOffset = (window.pageYOffset - (aboutus.offsetTop + 700)) / 12; ThreeyOffsetDeg = (window.pageYOffset - (aboutus.offsetTop + 400)) / 26; ThreeyOffsetLower = (2000 - window.pageYOffset) / 450; ThreeyOffsetMin = (600 + window.pageYOffset) / 1500;

      if (window.pageYOffset < aboutus.offsetTop + 200) {
         aboutus_one.style.transform = `translate3d(${yOffset}%, ${yOffsetLower}%, 0px) scale(${yOffsetMin}) rotate(${yOffsetDeg}deg)`;
         aboutus_two.style.transform = `translate3d(${TwoyOffset}%, ${TwoyOffsetLower}%, 0px) scale(${TwoyOffsetMin}) rotate(${TwoyOffsetDeg}deg)`;
         aboutus_three.style.transform = `translate3d(${ThreeyOffset}%, ${ThreeyOffsetLower}%, 0px) scale(${ThreeyOffsetMin}) rotate(${ThreeyOffsetDeg}deg)`;
      }

      const tips = document.querySelector('.tips');

      const tips_one = document.querySelector('.tips__image-one');
      const tips_two = document.querySelector('.tips__image-two');

      yOffsetSec = (window.pageYOffset - (tips.offsetTop + 600)) / 5; yOffsetDegSec = (window.pageYOffset - (tips.offsetTop - 200)) / 35; yOffsetLowerSec = (tips.offsetTop - window.pageYOffset) / 150; yOffsetMinSec = (tips.offsetTop + window.pageYOffset) / 3300;
      TwoyOffsetSec = (window.pageYOffset - (tips.offsetTop + 800)) / 10; TwoyOffsetDegSec = (window.pageYOffset - (tips.offsetTop - 400)) / 35; TwoyOffsetLowerSec = (tips.offsetTop - window.pageYOffset) / 350; TwoyOffsetMinSec = (tips.offsetTop + window.pageYOffset) / 3500;

      if (window.pageYOffset < tips.offsetTop + 200) {
         tips_one.style.transform = `translate3d(${yOffsetSec}%, ${yOffsetLowerSec}%, 0px) scale(${yOffsetMinSec}) rotate(${yOffsetDegSec}deg)`;
         tips_two.style.transform = `translate3d(${TwoyOffsetSec}%, ${TwoyOffsetLowerSec}%, 0px) scale(${TwoyOffsetMinSec}) rotate(${TwoyOffsetDegSec}deg)`;
      }

      const xz = document.querySelector('.xz');

      const xz_one = document.querySelector('.xz__image-one');
      const xz_two = document.querySelector('.xz__image-two');

      yOffsetThree = (window.pageYOffset - (xz.offsetTop + 700)) / 15; yOffsetDegThree = (window.pageYOffset - (xz.offsetTop + 200)) / 25; yOffsetLowerThree = (2000 - window.pageYOffset) / 200; yOffsetMinThree = window.pageYOffset / 2400;
      TwoyOffsetThree = (window.pageYOffset - (xz.offsetTop + 700)) / 30; TwoyOffsetDegThree = (window.pageYOffset - (xz.offsetTop + 600)) / 15; TwoyOffsetLowerThree = (2000 - window.pageYOffset) / 350; TwoyOffsetMinThree = window.pageYOffset / 2700;

      if (window.pageYOffset < xz.offsetTop + 200) {
         xz_one.style.transform = `translate3d(${yOffsetThree}%, ${yOffsetLowerThree}%, 0px) scale(${yOffsetMinThree}) rotate(${yOffsetDegThree}deg)`;
         xz_two.style.transform = `translate3d(${TwoyOffsetThree}%, ${TwoyOffsetLowerThree}%, 0px) scale(${TwoyOffsetMinThree}) rotate(${TwoyOffsetDegThree}deg)`;
      }
   });
}

////


document.getElementById('languageButton').onclick = function () {
   document.querySelector('.languagePopup').classList.toggle('languagePopupActive');
   document.querySelector('.languagePopup__text').classList.toggle('languagePopup__textActive');
}

$(document).ready(function () {
   $("#up").click(function () {
      $("html,body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 750,
         easing: "swing"
      });
      return false;
   });
});

$(document).ready(function () {
   $(".header_burger").click(function (event) {
      $('.header_burger,.header__menu,.header__nav,.header__logo,.header__top,.header__download,.headerHrTop,.header__menu-wrapper,.welcome,.languagePopup').toggleClass('active');
   });
});