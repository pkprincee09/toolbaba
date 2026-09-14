document.addEventListener("DOMContentLoaded", async function () {

  // =========================
  // LOAD NAVBAR
  // =========================

  const navbar = document.getElementById("navbar");

  if (navbar) {
    try {
      const response = await fetch("components/navbar.html");
      navbar.innerHTML = await response.text();
    } catch (error) {
      console.error("Navbar loading error:", error);
    }
  }


  // =========================
  // LOAD FOOTER
  // =========================

  const footer = document.getElementById("footer");

  if (footer) {
    try {
      const response = await fetch("components/footer.html");
      footer.innerHTML = await response.text();
    } catch (error) {
      console.error("Footer loading error:", error);
    }
  }


  // =========================
  // MOBILE MENU
  // =========================

  document.addEventListener("click", function (e) {

    const menuButton = e.target.closest("#tbMenuBtn");

    if (menuButton) {

      const mobileMenu =
        document.getElementById("tbMobileMenu");

      if (mobileMenu) {
        mobileMenu.classList.toggle("active");
      }

    }


    const mobileLink =
      e.target.closest(".tb-mobile-menu a");

    if (mobileLink) {

      const mobileMenu =
        document.getElementById("tbMobileMenu");

      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }

    }

  });

});
