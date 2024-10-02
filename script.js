document.getElementById("revealButton").addEventListener("click", function () {
  const details = document.getElementById("details");
  if (details.classList.contains("hidden")) {
    details.classList.remove("hidden");
    this.textContent = "Tutup Lagi ya!";
  } else {
    details.classList.add("hidden");
    this.textContent = "Coba buka";
  }
});
