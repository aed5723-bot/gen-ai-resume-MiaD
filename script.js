
document.addEventListener("DOMContentLoaded", () => {

    //DARK MODE
    const toggleBtn = document.getElementById("darkModeToggle");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }


    //SOCIAL LINKS
    const linkedinImg = document.getElementById("linkedin");
    const githubImg = document.getElementById("github");
    const portfolioImg = document.getElementById("portfolio");

    if (linkedinImg) {
        linkedinImg.addEventListener("click", () => {
            alert("Check out my LinkedIn profile!");
        });
    }

    if (githubImg) {
        githubImg.addEventListener("click", () => {
            alert("Visit my GitHub to see my projects!");
        });
    }

    if (portfolioImg) {
        portfolioImg.addEventListener("click", () => {
            alert("Explore my portfolio website!");
        });
    }

});
