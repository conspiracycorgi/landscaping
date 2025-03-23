document.addEventListener("DOMContentLoaded", () => {
  // Add active class to nav links based on current page
  const currentLocation = window.location.pathname
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link")

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href")
    if (currentLocation.includes(linkPath) && linkPath !== "/") {
      link.classList.add("active")
    } else if (currentLocation === "/" && linkPath === "/") {
      link.classList.add("active")
    }
  })

  // Form validation
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      if (!contactForm.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      contactForm.classList.add("was-validated")
    })
  }

  // Header animation
  const headerAnimation = () => {
    const mowerWrapper = document.querySelector(".mower-animation-wrapper")
    const logoContainer = document.querySelector(".logo-container")
    const companyName = document.querySelector(".company-name-reveal span")

    if (mowerWrapper && logoContainer && companyName) {
      // Reset animations if needed for repeat viewing
      mowerWrapper.style.animation = "none"
      companyName.style.animation = "none"

      // Trigger reflow
      void mowerWrapper.offsetWidth
      void companyName.offsetWidth

      // Restart animations
      mowerWrapper.style.animation = "mower-enter 2s forwards"
      companyName.style.animation = "text-reveal 0.5s ease forwards"
      companyName.style.animationDelay = "2s"

      // Create grass effect when mower reaches logo
      setTimeout(() => {
        const createGrassEffect = () => {
          const grass = document.createElement("span")
          grass.classList.add("grass-particle")
          grass.style.left = 0 + Math.random() * 40 + "px" // Adjusted position
          grass.style.animationDuration = Math.random() * 2 + 1 + "s"
          document.querySelector(".header-animation-container").appendChild(grass)

          setTimeout(() => {
            grass.remove()
          }, 3000)
        }

        // Create multiple grass particles
        for (let i = 0; i < 10; i++) {
          setTimeout(createGrassEffect, i * 100)
        }

        // Hide mower when text appears
        setTimeout(() => {
          mowerWrapper.style.opacity = "0"
        }, 500)
      }, 1400) // Adjusted timing
    }
  }

  // Run header animation on page load
  headerAnimation()

  // Logo hover effect
  const logoContainer = document.querySelector(".logo-container")
  if (logoContainer) {
    logoContainer.addEventListener("mouseenter", () => {
      // Create grass cutting effect
      const createGrassEffect = () => {
        const grass = document.createElement("span")
        grass.classList.add("grass-particle")
        grass.style.left = Math.random() * 100 + "%"
        grass.style.animationDuration = Math.random() * 2 + 1 + "s"
        logoContainer.appendChild(grass)

        setTimeout(() => {
          grass.remove()
        }, 3000)
      }

      // Create grass cutting effect
      const grassInterval = setInterval(createGrassEffect, 200)

      logoContainer.addEventListener(
        "mouseleave",
        () => {
          clearInterval(grassInterval)
        },
        { once: true },
      )
    })
  }
})

