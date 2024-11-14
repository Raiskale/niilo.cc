// Select all elements you want to observe
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add a class to trigger animation or make the element visible
      entry.target.classList.add('in-view');
      
      // Optionally stop observing after animation is triggered
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5, // The element will be considered "in view" when 50% of it is visible
});

// Observe each element
elementsToAnimate.forEach(element => {
  observer.observe(element);
});
