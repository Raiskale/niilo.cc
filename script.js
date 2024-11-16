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



// Github commit 

async function getCommitCount() {
  const username = "Raiskale"; // Replace with your GitHub username
  const url = `https://api.github.com/users/${username}/events`;

  try {
    const response = await fetch(url);
    const events = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    // Filter for commits in the current month
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    let commitCount = 0;

    events.forEach(event => {
      if (
        event.type === "PushEvent" &&
        new Date(event.created_at).getMonth() === currentMonth &&
        new Date(event.created_at).getFullYear() === currentYear
      ) {
        commitCount += event.payload.commits.length;
      }
    });

    document.getElementById("count-text").textContent = `${commitCount}+ `;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("commit-count").textContent = "Unable to fetch commit count.";
  }
}

getCommitCount();
