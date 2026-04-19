
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("darkModeToggle");

    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Load saved theme
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
