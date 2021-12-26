// Handling the tab switches in home page
function showSection(evt, tabName) {
  let i, tabContent, tabButton;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButton = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Setting current date in date card
const currentDate = document.querySelector("#current-date");
const d = new Date();
currentDate.innerHTML = d.getDate();
