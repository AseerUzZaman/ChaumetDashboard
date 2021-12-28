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

// Opening notifications
function showNotifications() {
  const notifications = document.querySelector(".notifications-container");

  if (notifications.classList.contains("close"))
    notifications.classList.remove("close");
  else notifications.classList.add("close");
}

// Setting current date in date card
const currentDate = document.querySelector("#current-date");
const d = new Date();
currentDate.innerHTML = d.getDate();

// Selecting calendar date card in overview tab
function setDate(event) {
  const dateText = document.querySelector("#current-date");
  dateText.innerHTML = this.event.target.value.slice(-2);
}
