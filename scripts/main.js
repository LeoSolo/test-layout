let splashScreen = {
  progress: 0,
  bar: document.getElementsByClassName('separator')[0].getElementsByTagName('div')[0],
  count: document.getElementsByClassName('progressCount')[0],
  splashScreen: document.getElementsByClassName('splashScreen')[0],
  speed: 20,
  start: function() {
      let interval = setInterval(() => {
        this.progress += 1;
        this.progress === 100 && (
            clearInterval(interval),
            this.splashScreen.style.opacity = 0,
            setTimeout(()=> {
                this.splashScreen.style.display = 'none'
            }, 300)
        );
        this.count.innerHTML = this.progress + '%';
        this.bar.style.height = this.progress + '%';
      }, this.speed);
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
      this.localize();
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
        Array.from(this.menuContainer.classList).indexOf('opened') === -1 ?
            this.menuContainer.classList.add('opened')
            :
            this.menuContainer.classList.remove('opened')
    }
};



document.addEventListener('DOMContentLoaded', function(){
    localization.localize();
    splashScreen.start();
});