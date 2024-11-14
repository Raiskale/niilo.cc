// Select all elements with the class 'animate-on-scroll'
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Check if the element is in view
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');  // Add 'in-view' class to trigger animation
      observer.unobserve(entry.target);  // Stop observing after animation is triggered
    }
  });
}, { threshold: 1 }); // Trigger when 50% of the element is in view

// Observe each element
elementsToAnimate.forEach(element => {
  observer.observe(element);
});
