// Select every element that represents a page in the poetry viewer.
const pages = document.querySelectorAll(".page");

// Track the page that is currently visible, starting with the first page.
let currentPage = 0;

// Mark the first page as active when the script loads.
pages[currentPage].classList.add("active");

// Turn to the next page when navigation is allowed.
function turnNext() {

    // Stop if the viewer is already on the last page.
    if (currentPage >= pages.length - 1) return;

    // Store the currently visible page.
    const current = pages[currentPage];

    // Start the forward page-turn animation.
    current.classList.add("turning-forward");

    // Wait for the animation to finish before changing pages.
    setTimeout(() => {

        // Remove the old page's active and animation states.
        current.classList.remove("active");
        current.classList.remove("turning-forward");

        // Move the page index forward.
        currentPage++;

        // Make the next page visible.
        pages[currentPage].classList.add("active");

    }, 1200);
}

// Turn to the previous page when navigation is allowed.
function turnPrevious() {

    // Stop if the viewer is already on the first page.
    if (currentPage <= 0) return;

    // Store the currently visible page.
    const current = pages[currentPage];

    // Start the backward page-turn animation.
    current.classList.add("turning-backward");

    // Wait for the animation to finish before changing pages.
    setTimeout(() => {

        // Remove the old page's active and animation states.
        current.classList.remove("active");
        current.classList.remove("turning-backward");

        // Move the page index backward.
        currentPage--;

        // Make the previous page visible.
        pages[currentPage].classList.add("active");

    }, 1200);
}

// Run turnNext when the Next button is clicked.
document
    .getElementById("nextBtn")
    .addEventListener("click", turnNext);

// Run turnPrevious when the Previous button is clicked.
document
    .getElementById("prevBtn")
    .addEventListener("click", turnPrevious);