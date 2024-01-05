window.onload = function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
};``
      TweenMax.from(".logo", 1, {
        opacity: 0,
        x:-20,
        ease: Expo.easeInOut,
      });
      TweenMax.staggerFrom("#home ul li a", 1, {
            opacity: 0,
            x: -20,
            ease: Power3.easeInOut
        }, 0.08)
        TweenMax.from(".boxes img", 3, {
          opacity: 0,
          x: -20,
          ease: Expo.easeInOut,
        });
        TweenMax.from(".box1",3, {
          opacity: 0,
          x: -20,
          ease: Expo.easeInOut,
        });
        const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Frontend";
            }, 0);
            setTimeout(() => {
                text.textContent = "Developer";
            }, 4000);
           
        }
        textLoad();
        setInterval(textLoad, 12000);
        