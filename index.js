document.addEventListener("DOMContentLoaded", function () {
  var typedAbout = new Typed("#about-text", {
    strings: ["My intro", "About me"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  var typedServices = new Typed("#services-text", {
    strings: ["My Services"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  var typedHero = new Typed("#typed-hero", {
    strings: ["Nabiha-khan", "a Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var typedHero = new Typed("#typed-hero", {
    strings: ["Nabiha-khan", "a Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Find all elements with class .read-more and set up event listeners
  document.querySelectorAll(".read-more").forEach((readMoreButton) => {
    readMoreButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Find the relevant elements within the current blog item
      const blogCard = readMoreButton.closest(".blog-card");
      const blogExcerpt = blogCard.querySelector(".blog-excerpt");
      const blogContent = blogCard.querySelector(".blog-content");

      // Toggle the 'show' class to expand/collapse content
      blogExcerpt.classList.toggle("hide");
      blogContent.classList.toggle("show");

      // Update the button text based on visibility
      if (blogContent.classList.contains("show")) {
        readMoreButton.textContent = "Read Less";
      } else {
        readMoreButton.textContent = "Read More";
      }
    });
  });
});
