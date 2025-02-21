// Function to toggle the theme
const themeToggleButton = document.getElementById("theme-toggle");

// Check for saved theme in local storage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.body.classList.toggle("light-mode", currentTheme === "light");
}

// Event listener for the theme toggle button
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Save the current theme to local storage
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
