class Navbar {
    constructor() {
        this.body = document.getElementsByTagName("body")[0];
        this.header = document.getElementById("header");
        this.hamburger = document.getElementById("navbar__hamburger");
        this.navbar_wrapper = document.getElementById("navbar__link-wrapper");
        this.navbar_links = Array.from(document.getElementsByClassName("navbar__link"));
        this.navbar_logo = document.getElementById("navbar__logo");
        this.hidden_close_div = document.getElementById("navbar__full_page_close");
        this.home_section = document.getElementById("home");
        this.bkg_change_location = 0;

        if (this.navbar_links.length > 0) this.createResponsiveMenuBinds();

        if (this.home_section) {
            this.createScrollBinds();
        } else {
            this.header.classList.remove("navbar__clear-background");  // If there is no hero section, ensure that there is a background on the navbar.
        }
    }

    createResponsiveMenuBinds() {
        this.hamburger.addEventListener("click", () => this.toggleMenu());
        this.hidden_close_div.addEventListener("click", () => this.closeMenu());
        this.navbar_logo.addEventListener("click", ()=> this.closeMenu());
        this.createNavLinkBinds();
        console.log(this.isMenuOpen());
    }

    createScrollBinds() {
        let child_after_home = this.home_section.nextElementSibling;
        if (child_after_home) {
            this.bkg_change_location = child_after_home.offsetTop;
            window.addEventListener("scroll", () => this.toggleBackground());
        }
    }
    
    toggleMenu() {
        if (this.isMenuOpen()) this.closeMenu();
        else this.openMenu();
    }

    createNavLinkBinds() {
        this.navbar_links.map( 
            link => link.addEventListener("click", () => this.closeMenu())
        );
    };

    toggleBackground() {
        if (window.pageYOffset >= this.bkg_change_location) {
            this.header.classList.remove("navbar__clear-background");
        } else {
            this.header.classList.add("navbar__clear-background");
        }
    }

    isMenuOpen() {
        console.log(this.navbar_wrapper.classList);
        if(this.navbar_wrapper.classList.contains("hidden-menu")) console.log("Hidden-menu is in there!");
        return !this.navbar_wrapper.classList.contains("hidden-menu");
    }

    openMenu() {
        if (!this.isMenuOpen()) {
            this.navbar_wrapper.classList.remove("hidden-menu");
            this.hidden_close_div.classList.remove("hidden");
            this.hamburger.innerText = "X";
            this.toggleClass(this.body, "stop-scroll");
        }
    }

    closeMenu() {
        if (this.isMenuOpen()) {
            this.navbar_wrapper.classList.add("hidden-menu");
            this.hidden_close_div.classList.add("hidden");
            this.hamburger.innerText = "☰";
            this.toggleClass(this.body, "stop-scroll");
        }
    }

   

    toggleClass(elem, class_name) {
        elem.classList.toggle(class_name);
    }





}


new Navbar("navbar");


