const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

      searchBtn.addEventListener("click",() =>{
        sidebar.classList.remove("close");
      });


      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        } else{
            modeText.innerText = "Dark Mode"
        }
      });
    
   // Function to handle tab switching
function togs(index) {
  // Get all tab content elements
  var tabs = document.querySelectorAll('.tog');

  // Get all tab buttons
  var tabButtons = document.querySelectorAll('.nav ul li');

  // Loop through each tab content and hide them all
  tabs.forEach(function(tab) {
      tab.style.display = 'none';
  });

  // Remove active class from all tab buttons
  tabButtons.forEach(function(button) {
      button.classList.remove('active');
  });

  // Display the selected tab content
  tabs[index].style.display = 'block';

  // Add active class to the selected tab button
  tabButtons[index].classList.add('active');
}

// Initialize the first tab as active
document.addEventListener('DOMContentLoaded', function() {
  togs(0); // Display the first tab by default
});


let bio = document.querySelector('.bio');
function bioText(){
    bio.oldText = bio.innerText;
    bio.innerText = bio.innerText.substring(0,100)+"...";
    bio.innerHTML += "&nbsp;" +`<span onclick='addLength()' id = 'see-more-bio'> See More</span>`;
    bio.original = bio.innerHTML;
}
bioText();

function addLength(){
    bio.innerHTML = bio.oldText;
    bio.innerHTML +="&nbsp;" +`<span onclick='removeLength()' id = 'see-less-bio'> See Less</span>`;
}
function removeLength(){
    bio.innerHTML = bio.original
}

// JavaScript to switch between sections
/*function tabSwitch(index) {
  // Hide all sections
  const sections = document.querySelectorAll('.merge');
  sections.forEach(section => {
      section.style.display = 'none';
  });

  // Show the selected section
  sections[index].style.display = 'block';
}

// Set initial active section
tabSwitch(0);

// Add event listeners to sidebar icons
document.querySelector('.bx-home-alt').parentElement.addEventListener('click', () => tabSwitch(0));
document.querySelector('.bxs-dish').parentElement.addEventListener('click', () => tabSwitch(1));
document.querySelector('.bx-user-circle').parentElement.addEventListener('click', () => tabSwitch(2));
document.querySelector('.bx-cog').parentElement.addEventListener('click', () => tabSwitch(3));
*/

// JavaScript to switch between sections
function tabSwitch(index) {
  // Hide all sections
  const sections = document.querySelectorAll('.merge');
  sections.forEach(section => {
      section.style.display = 'none';
  });

  // Show the selected section
  sections[index].style.display = 'block';

  // Remove active class from all icons
  const icons = document.querySelectorAll('.menu-links .nav-link a');
  icons.forEach(icon => {
      icon.classList.remove('active');
  });

  // Add active class to the clicked icon
  icons[index].classList.add('active');
}

// Set initial active section
tabSwitch(0);

// Add event listeners to sidebar icons
document.querySelector('.bx-home-alt').parentElement.addEventListener('click', () => tabSwitch(0));
document.querySelector('.bxs-dish').parentElement.addEventListener('click', () => tabSwitch(1));
document.querySelector('.bx-user-circle').parentElement.addEventListener('click', () => tabSwitch(2));
document.querySelector('.bx-cog').parentElement.addEventListener('click', () => tabSwitch(3));
