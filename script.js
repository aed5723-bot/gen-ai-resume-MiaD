
// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Get the image elements
    const linkedinImg = document.getElementById('linkedin');
    const githubImg = document.getElementById('github');
    const portfolioImg = document.getElementById('portfolio');

    // Add click event listeners
    linkedinImg.addEventListener('click', () => {
        alert('Check out my LinkedIn profile!');
    });

    githubImg.addEventListener('click', () => {
        alert('Visit my GitHub to see my projects!');
    });

    portfolioImg.addEventListener('click', () => {
        alert('Explore my portfolio website!');
    });
});
