// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    });
}

// Enroll button alert
document.getElementById("enrollButton").addEventListener("click", () => {
    alert("Enrollment page is under development. Stay tuned!");
});

document.getElementById('openMenu').addEventListener('click', () => {
    document.getElementById('sidebar').style.display = 'block';
});

document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('sidebar').style.display = 'none';
});
