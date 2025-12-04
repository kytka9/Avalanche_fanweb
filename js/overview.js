const headerHeight = 100;
const toTop = document.querySelector(".top-page");

// Button mapping to sections
const scrollMap = [
    { buttonId: "history", targetId: "history-scroll" },
    { buttonId: "achievements", targetId: "achievements-scroll" },
    { buttonId: "stadium", targetId: "stadium-scroll" }
];

// Function for scrolling
function scrollToSection(target) {
    window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: "smooth"
    });
}

// Add event listeners for buttons
scrollMap.forEach(({ buttonId, targetId }) => {
    const button = document.getElementById(buttonId);
    const target = document.getElementById(targetId);

    if (button && target) {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            scrollToSection(target);
            toTop.style.display = "block";
        });
    }
});

// Event listener for button "Scroll to Top"
toTop.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    toTop.style.display = "none"; // hide button
});