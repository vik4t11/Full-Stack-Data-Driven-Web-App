// ENTRY PAGE BUTTON AND FORM ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    
    // ENTRY BUTTON AND VISITOR FORM

    // Locate the entry button and visitor form elements in the page.
    const enterButton = document.getElementById("enterButton");
    const visitorModal = document.getElementById("visitorModal");
    const closeButton = document.getElementById("closeButton");

    // Log each element to help confirm that the required DOM elements were found.
    console.log("ENTER BUTTON:", enterButton);
    console.log("VISITOR FORM:", visitorModal);
    console.log("CLOSE BUTTON:", closeButton);

    // OPEN VISITOR FORM

    if (enterButton && visitorModal) {
        enterButton.addEventListener("click", function () {
            console.log("ENTER BUTTON CLICKED");

            enterButton.classList.add("hidden");
            visitorModal.classList.remove("hidden");
        });
    }

    // CLOSE VISITOR FORM

    if (closeButton && visitorModal) {
        closeButton.addEventListener("click", function () {
            console.log("CLOSE BUTTON CLICKED");

            // Hide the form and make the entry button available again.
            visitorModal.classList.add("hidden");

            if (enterButton) {
                enterButton.classList.remove("hidden");
            }
        });
    }

    // CUSTOM REASON FOR VISIT DROPDOWN

    const dropdown = document.getElementById("reasonDropdown");

    if (dropdown) {
        const select = dropdown.querySelector(".dropdown-native");
        const trigger = dropdown.querySelector(".custom-dropdown-trigger");
        const current = dropdown.querySelector(".dropdown-current");
        const options = dropdown.querySelectorAll(".custom-dropdown-option");

        // Check that all dropdown elements exist.
        if (!select || !trigger || !current) {
            console.error("Dropdown elements are missing.");
            return;
        }

        console.log("CUSTOM DROPDOWN INITIALISED");

        // UPDATE DISPLAYED DROPDOWN TEXT

        function updateDropdown() {
            // Find the custom option corresponding to the native select value.
            const selected = Array.from(options).find(function (option) {
                return option.dataset.value === select.value;
            });

            // Show placeholder if no option is selected.
            if (!select.value || !selected) {
                current.textContent = "Select a reason for your visit";
            } else {
                current.textContent = selected.textContent.trim();
            }

            // Update selected option indicators.
            options.forEach(function (option) {
                option.setAttribute(
                    "aria-selected",
                    option.dataset.value === select.value ? "true" : "false"
                );
            });
        }

    
        // OPEN AND CLOSE DROPDOWN

        trigger.addEventListener("click", function () {
            // Keep the visual open state and accessibility state in sync.
            const isOpen = dropdown.classList.toggle("open");

            trigger.setAttribute("aria-expanded", isOpen);
        });

        
        // SELECT AN OPTION

        options.forEach(function (option) {
            option.addEventListener("click", function () {
                // Transfer selected value to Django select.
                select.value = option.dataset.value;

                // Notify the form that the value has changed.
                // Preserve normal form behavior by notifying listeners of the change.
                select.dispatchEvent(
                    new Event("change", { bubbles: true })
                );

                // Update visible text.
                updateDropdown();

                // Close dropdown.
                dropdown.classList.remove("open");

                trigger.setAttribute("aria-expanded", "false");
                trigger.focus();

                console.log("SELECTED:", select.value);
            });
        });

        
        // CLOSE WHEN CLICKING OUTSIDE
        
        document.addEventListener("click", function (event) {
            // Close the menu when the click occurs outside its container.
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
                trigger.setAttribute("aria-expanded", "false");
            }
        });


        // CLOSE USING ESCAPE KEY

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                // Escape closes the menu and returns keyboard focus to its trigger.
                dropdown.classList.remove("open");
                trigger.setAttribute("aria-expanded", "false");
                trigger.focus();
            }
        });

        
// INITIALISE DROPDOWN
        
        updateDropdown();
    } else {
        console.warn("Reason dropdown not found on this page.");
    }
});

