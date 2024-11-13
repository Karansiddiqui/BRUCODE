const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;

// Initial button visibility
prevBtn.style.display = "none"; // Hide "prev" initially

// Handle Next button click
nextBtn.addEventListener("click", () => {
  console.log(scrollAmount); // Debugging: track current scroll position
  console.log(slider.scrollWidth); // Total width of the slider
  console.log(slider.offsetWidth); // Visible area of the slider

  // Move by 200px for each image
  scrollAmount += 200;

  // Check if we have reached the end
  if (scrollAmount >= slider.scrollWidth - slider.offsetWidth) {
    nextBtn.style.display = "none"; // Hide next button if at the end
  } else {
    prevBtn.style.display = "block"; // Show previous button if not at the start
  }

  // Scroll the slider to the next position
  slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

// Handle Prev button click
prevBtn.addEventListener("click", () => {
  console.log(scrollAmount); // Debugging: track current scroll position
  console.log(slider.scrollWidth); // Total width of the slider
  console.log(slider.offsetWidth); // Visible area of the slider

  // Move by 200px for each image
  scrollAmount -= 200;

  // Check if we have reached the start
  if (scrollAmount <= 0) {
    prevBtn.style.display = "none"; // Hide prev button if at the start
  } else {
    nextBtn.style.display = "block"; // Show next button if not at the end
  }

  // Scroll the slider to the previous position
  slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
});
