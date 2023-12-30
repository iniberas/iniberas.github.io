function toggle_dark_mode(theme=-1){
    if (theme == -1) {
        toggle_dark_mode(Math.abs(Cookies.get("theme")-1))
        return
    }
    
    var root = document.querySelector(":root");
    var dark_mode_check_element = document.getElementById("dark-mode-check");

    Cookies.set("theme", theme)
    if (Cookies.get("theme") == 0){
        dark_mode_check_element.textContent = "[ ]";
        root.style.setProperty("--color1", "#000000")
        root.style.setProperty("--color2", "#ffffff")
    } else {
        dark_mode_check_element.textContent = "[+]";
        root.style.setProperty("--color1", "#ffffff")
        root.style.setProperty("--color2", "#000000")
    }
}


if (Cookies.get("theme") === undefined) {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            Cookies.set("theme", 0)
        } else {
            Cookies.set("theme", 1)
        }
    }
}
else {
    toggle_dark_mode(Cookies.get("theme"))
}
