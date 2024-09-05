const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

// Toggle sidebar open/close
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// Ensure sidebar stays open when search is clicked
searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

// Toggle between dark and light mode
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Toggle visibility of extra content on CTA button click
    const extraContentSection = document.querySelector('.extra-content');
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (extraContentSection.style.display === "none" || extraContentSection.style.display === "") {
            extraContentSection.style.display = "grid";
            ctaButton.textContent = "Show Less";
        } else {
            extraContentSection.style.display = "none";
            ctaButton.textContent = "Get Started";
        }
    });

    // Handle login and sign up button clicks
    const loginButton = document.querySelectorAll('.auth-button')[0];
    const signupButton = document.querySelectorAll('.auth-button')[1];

    loginButton.addEventListener('click', function () {
        alert('Login functionality not yet implemented.');
    });

    signupButton.addEventListener('click', function () {
        alert('Sign-up functionality not yet implemented.');
    });

    // Add hover effect on recipe cards
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(function (card) {
        card.addEventListener('mouseover', function () {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', function () {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });

    // Handle social media icon clicks
    const socialMediaLinks = document.querySelectorAll('.social-media a');

    socialMediaLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            alert('This would open the social media page.');
        });
    });
});
