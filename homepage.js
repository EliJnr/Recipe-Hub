document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebar .toggle');
    const sidebar = document.querySelector('.sidebar');

    // Toggle sidebar width
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('close');
    });

    // Smooth scrolling for profile tabs
    document.querySelectorAll('.profile-tabs a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    const toggleSwitch = document.querySelector('.toggle-switch .switch');
    toggleSwitch.addEventListener('click', function() {
        toggleSwitch.classList.toggle('active');
        document.body.classList.toggle('dark-mode');
    });
});
