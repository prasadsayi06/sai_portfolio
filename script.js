```javascript
/* ==================================================
   PORTFOLIO WEBSITE JAVASCRIPT
================================================== */


/* ==================================================
   SMOOTH SCROLL TO SECTION
================================================== */

function showPage(pageName) {

    const selectedPage = document.getElementById(pageName);

    if (!selectedPage) {
        return;
    }

    // Show Skills or Education when button is clicked
    if (pageName === "skills" || pageName === "education") {
        selectedPage.classList.add("show-section");
    }

    // Scroll to the selected section
    selectedPage.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* ==================================================
   EDUCATION - READ MORE / SHOW LESS
================================================== */

function toggleEducation(button) {

    // Find the education card
    const card = button.closest(".education-card");

    if (!card) {
        return;
    }

    // Open / close the card
    card.classList.toggle("expanded");


    // Change button text
    if (card.classList.contains("expanded")) {

        button.innerText = "Show Less";

    } else {

        button.innerText = "Read More";

    }

}


/* ==================================================
   START WEBSITE
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Start website at the top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });

});
```














