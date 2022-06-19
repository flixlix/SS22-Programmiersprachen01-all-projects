/* Wait for document to load */
document.addEventListener("DOMContentLoaded", function (event) {
    document.documentElement.setAttribute("data-theme", "light");
});

let currentTheme;

function toggleMode() {
    // Get the current selected theme, on the first run
    // it should be `light`
    currentTheme = document.documentElement.getAttribute("data-theme");
    
    
    // Switch between `dark` and `light`
    const switchToTheme = currentTheme === "dark" ? "light" : "dark";
    themeUsed = switchToTheme;

    if (switchToTheme === "dark") {
        infoImage.src = "images/game_plan_dark_mode.png";
    } else if (switchToTheme === "light") {
        infoImage.src = "images/game_plan_light_mode.png";
    }
    /* change info image source between light and dark mode, according to the rest */

    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
}

