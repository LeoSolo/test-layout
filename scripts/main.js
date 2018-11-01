let splashScreen = {
  progress: 0,
  bar: document.getElementsByClassName('separator')[0].getElementsByTagName('div')[0],
  count: document.getElementsByClassName('progressCount')[0],
  splashScreen: document.getElementsByClassName('splashScreen')[0],
  speed: 20,
  start: function() {
      let interval = setInterval(function() {
        splashScreen.progress += 1;
        splashScreen.progress === 100 && (
            clearInterval(interval),
            splashScreen.splashScreen.style.opacity = 0,
            setTimeout(function() {
                splashScreen.splashScreen.style.display = 'none'
            }, 300)
        );
        splashScreen.count.innerHTML = splashScreen.progress + '%';
        splashScreen.bar.style.height = splashScreen.progress + '%';
      }, splashScreen.speed);
  }
};



let LANG = 'EN'; // window.navigator.language

let langBtn = document.getElementsByClassName('bottomPart')[0].getElementsByTagName('span')[0];
langBtn.addEventListener('click', function(e) {
    localization.switchLanguage(e);
});

let localization = {
  localize: function() {
      let _locCollection = document.getElementsByClassName('_loc');
      for(let i = 0; i < _locCollection.length; i ++) {
          _locCollection[i].innerHTML = LOCALIZATION[_locCollection[i].dataset.loc][LANG]
      }
  },
  switchLanguage: function(e) {
      switch (LANG) {
          case 'EN':
              LANG = 'RU';
              break;
          case 'RU':
              LANG = 'EN';
              break;
      }
      e.target.innerHTML = LANG;
      localization.localize();
  }
};



let menuBtn = document.getElementsByClassName('menuBtn')[0];
let closeMenuBtn = document.getElementsByClassName('closeMenuBtn')[0];
menuBtn.addEventListener('click', function() {
    menu.trigger();
});
closeMenuBtn.addEventListener('click', function() {
    menu.trigger();
});

let menu = {
    menuContainer: document.getElementsByClassName('menuContainer')[0],
    trigger: function() {
        menu.menuContainer.classList.contains('opened') ?
            menu.menuContainer.classList.remove('opened')
            :
            menu.menuContainer.classList.add('opened')
    }
};



document.addEventListener('DOMContentLoaded', function(){
    localization.localize();
    splashScreen.start();
});