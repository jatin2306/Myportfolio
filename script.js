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
      TweenMax.staggerFrom("#home ul li a", 2, {
            opacity: 0,
            x: -20,
            ease: Power3.easeInOut
        }, 0.08)
        TweenMax.from(".boxes img", 3, {
          opacity: 0,
          x: -20,
          ease: Expo.easeInOut,
        });
        TweenMax.from(".box1",4, {
          opacity: 0,
          x: -20,
          ease: Expo.easeInOut,
        });
    
      TweenMax.from(".button",5, {
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".item p",6, {
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
      
        function downloadfile() {
            // Replace 'path/to/your/file.pdf' with the actual path to your file
            var fileUrl = 'jatingupta_resume.pdf';

            // Create an invisible link element
            var link = document.createElement('a');
            link.href = fileUrl;

            // Set the download attribute with a desired filename
            link.download = 'jatingupta_resume.pdf';

            // Append the link to the body
            document.body.appendChild(link);

            // Trigger a click on the link to start the download
            link.click();

            // Remove the link from the DOM
            document.body.removeChild(link);
        }
