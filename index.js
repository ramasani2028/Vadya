

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const flipCards = document.querySelectorAll('.flip-card');
    const flipNext = document.querySelector('.flip-next');
    const flipPrev = document.querySelector('.flip-prev');
  let isWhite = false;
  document.getElementById("toggle-bg").addEventListener("click", function () {
    if (!isWhite) {
      document.body.style.background = "#fff";
      document.body.style.color = "#000";
      isWhite = true;
    } else {
      document.body.style.background = "linear-gradient(45deg, #0f2027, #203a43, #2c5364)";
      document.body.style.color = "#fff";
      isWhite = false;
    }
  });

    function showSlides() {
      slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
      });
      dots.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
        if (index === slideIndex) {
          dot.className += " active";
        }
      });
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlides();
    }

    function prevSlide() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlides();
    }

    function currentSlide(n) {
      slideIndex = n;
      showSlides();
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => currentSlide(index));
    });

    setInterval(nextSlide, 4000);
    showSlides();

    let flipIndex = 0;
    let flipInterval;

    function showFlipCards() {
      const totalCards = flipCards.length;
      const visibleCards = 3;
      flipCards.forEach((card, index) => {
        card.style.display = (index >= flipIndex && index < flipIndex + visibleCards) ? 'block' : 'none';
      });
    }

    function nextFlip() {
      flipIndex = (flipIndex + 1) % flipCards.length;
      showFlipCards();
    }

    function prevFlip() {
      flipIndex = (flipIndex - 1 + flipCards.length) % flipCards.length;
      showFlipCards();
    }

    function startFlipAutoplay() {
      flipInterval = setInterval(nextFlip, 4000);
    }

    function stopFlipAutoplay() {
      clearInterval(flipInterval);
    }

    flipNext.addEventListener('click', () => {
      stopFlipAutoplay();
      nextFlip();
      startFlipAutoplay();
    });

    flipPrev.addEventListener('click', () => {
      stopFlipAutoplay();
      prevFlip();
      startFlipAutoplay();
    });

    flipCards.forEach((card) => {
      card.addEventListener('mouseenter', stopFlipAutoplay);
      card.addEventListener('mouseleave', startFlipAutoplay);
    });

    showFlipCards();
    startFlipAutoplay();
