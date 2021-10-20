
//MODAL

const modal = document.getElementById("myModal");
        const openButton = document.getElementById("openModal");
      
        // Ketika tombol openButton ditekan
        openButton.addEventListener('click', () => {
          modal.style.display = "block";
          console.log('clicked')
        });
      
        const closeButton = document.getElementById("closeModal");
      
        // Ketika tombol closeButton ditekan
        closeButton.addEventListener('click', () => {
          modal.style.display = "none";
        });


//sliwdeshow

  let slideIndex = 1;

  const plusSlides = (n) => {
    slideIndex += n;
    showSlides(slideIndex);
  }
  
  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  
  showSlides(slideIndex); 

