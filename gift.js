let selectedGift = null;

function showOptions() {
  document.getElementById("options").style.display = "block";
  document.getElementById("warning").textContent = "";
}

function selectGift(choice) {
  selectedGift = choice;
  document.getElementById("warning").textContent = `Selected: ${choice}`;
}

function goToFinal() {
  if (!selectedGift) {
    document.getElementById("warning").textContent = "You definitely need to select one!";
    return;
  }
  sessionStorage.setItem("giftSelected", selectedGift);
  window.location.href = "final.html";
}

