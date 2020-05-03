class Navbar {
    constructor() {
        this.navbar = document.getElementById("navbar");
        this.hamburger = document.getElementById("navbar__hamburger");
        this.navbar_wrapper = document.getElementById("navbar__link-wrapper");
        this.navbar_links = Array.from(document.getElementsByClassName("navbar__link"));
        this.navbar_logo = document.getElementById("navbar__logo");
        console.log(this.navbar_links);
        this.hidden_close_div = document.getElementById("navbar__full_page_close");

        this.createResponsiveMenuBinds();
    }

    createResponsiveMenuBinds() {
        this.hamburger.addEventListener("click", () => this.toggleMenu());
        this.hidden_close_div.addEventListener("click", () => this.closeMenu());
        this.navbar_logo.addEventListener("click", ()=> this.closeMenu());
        this.createNavLinkBinds();
        console.log(this.isMenuOpen());
    }
    
    createNavLinkBinds() {
        this.navbar_links.map( 
            link => link.addEventListener("click", () => this.closeMenu())
        );
    };

    toggleMenu() {
        if (this.isMenuOpen()) this.closeMenu();
        else this.openMenu();
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
        }
    }

    closeMenu() {
        if (this.isMenuOpen()) {
            this.navbar_wrapper.classList.add("hidden-menu");
            this.hidden_close_div.classList.add("hidden");
            this.hamburger.innerText = "☰";
        }
    }

   

    toggleClass(elem, class_name) {
        elem.classList.toggle(class_name);
    }





}


bar = new Navbar("navbar");
