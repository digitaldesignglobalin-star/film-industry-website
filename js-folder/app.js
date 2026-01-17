// Smooth scroll 
// -------- BUTTERY SMOOTH SCROLL (FINAL) --------









const menuToggle = document.getElementById('menuToggle');
  const sideNav = document.getElementById('sideNav');
  const overlay = document.getElementById('offcanvasOverlay');
  const closeNav = document.getElementById('closeNav');

  menuToggle.addEventListener('click', () => {
    sideNav.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeNav.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
  }


  






// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Button hover effect enhancement
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Navbar link hover animation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Page load animation trigger
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});










document.querySelectorAll(".hover-video-card").forEach(card => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});










// scrollable what do we offer section 
document.querySelectorAll('.slider-wrapper').forEach((slider) => {
  const track = slider.querySelector('.slider-track');
  const isReverse = slider.closest('.services-slider')?.classList.contains('reverse');

  let isDown = false;
  let startX;
  let scrollLeft;
  let autoScrollSpeed = 0.6;
  let autoScroll;

  // ---------- SET INITIAL POSITION (KEY FIX) ----------
  requestAnimationFrame(() => {
    if (isReverse) {
      slider.scrollLeft = track.scrollWidth / 2;
    }
  });

  // ---------- DRAG ----------
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseup', () => isDown = false);
  slider.addEventListener('mouseleave', () => isDown = false);

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    slider.scrollLeft = scrollLeft - (e.pageX - startX);
  });

  // ---------- TOUCH ----------
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    slider.scrollLeft = scrollLeft - (e.touches[0].pageX - startX);
  });

  // ---------- INFINITE SCROLL ----------
  function infiniteScroll() {
    const max = track.scrollWidth / 2;

    if (slider.scrollLeft >= max) {
      slider.scrollLeft -= max;
    }
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft += max;
    }
  }

  slider.addEventListener('scroll', infiniteScroll);

  // ---------- AUTO SCROLL ----------
  function startAutoScroll() {
    autoScroll = setInterval(() => {
      if (isReverse) {
        // 👉 MOVE RIGHT
        slider.scrollLeft -= autoScrollSpeed;
      } else {
        // 👉 MOVE LEFT
        slider.scrollLeft += autoScrollSpeed;
      }
    }, 16);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  startAutoScroll();

  slider.addEventListener('mouseenter', stopAutoScroll);
  slider.addEventListener('mouseleave', startAutoScroll);
  slider.addEventListener('touchstart', stopAutoScroll);
  slider.addEventListener('touchend', startAutoScroll);
});




