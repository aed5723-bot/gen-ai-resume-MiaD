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
