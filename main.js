const shareBtn = document.querySelectorAll("button.share-btn");

shareBtn.forEach((btn) =>
  btn.addEventListener("click", () =>
    alert("Thanks for sharing! Nom nom nom :)")
  )
);


const navLinks = document.querySelectorAll(".dropdown-item");
const collapseThing = document.querySelector(".navbar-collapse.collapse")

navLinks.forEach((btn) =>
  btn.addEventListener("click", () => {
    console.log(collapseThing, collapseThing.classList)
    collapseThing.classList.toggle("show")
  }))