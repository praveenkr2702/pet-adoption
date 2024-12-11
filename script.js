document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to bento items
    // const bentoItems = document.querySelectorAll('.bento-item');
    
    // bentoItems.forEach(item => {
    //     item.addEventListener('mouseenter', () => {
    //         item.style.transform = 'translateY(-5px)';
    //         item.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.1)';
    //     });
        
    //     item.addEventListener('mouseleave', () => {
    //         item.style.transform = 'translateY(0)';
    //         item.style.boxShadow = 'none';
    //     });
    // });

    

    // Add parallax effect to hero icons
    document.addEventListener('mousemove', (e) => {
        const icons = document.querySelectorAll('.icon');
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        icons.forEach((icon, index) => {
            const factor = index + 1;
            icon.style.transform = `translate(${mouseX * 20 * factor}px, ${mouseY * 20 * factor}px)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
  
    hamburger.addEventListener('click', function() {
      sideMenu.classList.toggle('open');
    });
  
    // Close the menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
        sideMenu.classList.remove('open');
      }
    });
  });

