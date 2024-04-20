document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const cropDetails = this.parentElement.nextElementSibling;
      cropDetails.classList.toggle("active");
      if (cropDetails.classList.contains("active")) {
        this.textContent = "Show Less";
      } else {
        this.textContent = "Show More";
      }
    });
  });
});
