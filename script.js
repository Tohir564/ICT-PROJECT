document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting us! Together, we can make Nigeria cleaner.");
    this.reset();
});