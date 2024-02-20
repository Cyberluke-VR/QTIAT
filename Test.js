Qualtrics.SurveyEngine.addOnload(function() {
    // Hide the next button, as the IAT will control page advancement
    this.hideNextButton();

    // Example IAT structure (simplified)
    const iat = {
        // Define categories
        categories: [
            { name: "Category 1", stimuli: ["Word 1", "Word 2"] },
            { name: "Category 2", stimuli: ["Word 3", "Word 4"] }
        ],
        // Function to start the IAT
        start: function() {
            const container = this.getContainer();
            container.innerHTML = "<div id='iat-display'></div>";
            this.nextTrial();
        },
        // Function to display the next trial
        nextTrial: function() {
            const display = document.getElementById('iat-display');
            // Example of displaying a stimulus
            // In a real IAT, you'd handle logic to choose and display stimuli, record responses, and control flow
            display.innerHTML = "Stimulus goes here";
            // Logic for response, advancing trials, and eventually completing the IAT would go here
        },
        // Function to get the container where the IAT will be displayed
        getContainer: function() {
            return document.querySelector('#Questions .QuestionBody');
        },
        // Function to finish the IAT and proceed in Qualtrics
        finish: function() {
            // Show the next button when the IAT is complete
            Qualtrics.SurveyEngine.addOnReady(function() {
                this.showNextButton();
            });
            // Logic to save IAT data would go here
        }
    };

    // Start the IAT
    iat.start();
});
