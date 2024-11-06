       let currentStep = 0;

function nextStep() {
    const fieldsets = document.querySelectorAll("fieldset");
    let isValid = true;

    const inputs = fieldsets[currentStep].querySelectorAll("input, select");
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity();
            isValid = false;
        }
    });

    if (isValid) {
        fieldsets[currentStep].classList.remove("active");
        currentStep++;

        if (currentStep < fieldsets.length) {
            fieldsets[currentStep].classList.add("active");
        }
    }
}

function previousStep() {
    const fieldsets = document.querySelectorAll("fieldset");

    if (currentStep > 0) {
        fieldsets[currentStep].classList.remove("active");
        currentStep--;
        fieldsets[currentStep].classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const fieldsets = document.querySelectorAll("fieldset");
    fieldsets.forEach((fieldset, index) => {
        fieldset.classList.toggle("active", index === 0);
    });

    document.getElementById("currentYear").textContent = new Date().getFullYear();
});
