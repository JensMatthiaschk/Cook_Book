const shareBtn = document.querySelectorAll("button.share-btn");

shareBtn.forEach((btn) =>
  btn.addEventListener("click", () =>
    alert("Thanks for sharing! Nom nom nom :)")
  )
);
