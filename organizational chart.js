document.addEventListener("DOMContentLoaded", () => {
    const positions = document.querySelectorAll(".position");

    positions.forEach(position => {
        position.addEventListener("mouseover", () => {
            position.style.backgroundColor = "#dbe9ff";
            position.style.transform = "scale(1.05)";
        });

        position.addEventListener("mouseout", () => {
            position.style.backgroundColor = "white";
            position.style.transform = "scale(1)";
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
