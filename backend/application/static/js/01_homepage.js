
// Find the knickers button, if it exists on the page.
const knickersButton = document.querySelector('.knickers-button');

// Only attach the click behavior when the button is present.
if (knickersButton) {
    knickersButton.addEventListener('click', () => {
        // Toggle the active state used for visual styling.
        const isActive = knickersButton.classList.toggle('is-active');

        // Keep the accessibility pressed state in sync with the visual state.
        knickersButton.setAttribute(
            'aria-pressed',
            String(isActive)
        );
    });
}
