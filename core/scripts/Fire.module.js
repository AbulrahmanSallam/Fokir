export class Fire {
  constructor() {
    // ========= aos =========
    AOS.init();

    // ========= typed js =========
    const typed = new Typed("#typed", {
      strings: ["Software Engineer", "Frontend Developer"],
      typeSpeed: 60,
      loop: true,
      backSpeed: 60,
      smartBackspace: false,
    });

    // ======== owl carousal =======
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 200,
      });
    });

  }
}
