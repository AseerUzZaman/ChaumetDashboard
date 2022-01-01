let data = {
  title: null,
  firstName: "",
  lastName: "",
  province: "",
  number: "",
  email: "",
  date: "",
};

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
function setDate() {
  const dateText = document.querySelector("#current-date");
  dateText.innerHTML = this.event.target.value.slice(-2);
}

// Handle title field
function changeTitle() {
  if (this.event.target.id === "mr" && this.event.target.checked) {
    data.title = true;
    const mrs = document.getElementById("mrs");
    mrs.checked = false;
  }
  if (this.event.target.id === "mrs") {
    data.title = false;
    const mr = document.getElementById("mr");
    mr.checked = false;
  }

  if (this.event.target.id === "mr" && !this.event.target.checked) {
    data.title = null;
    const mr = document.getElementById("mr");
    mr.checked = false;
  }
  if (this.event.target.id === "mrs" && !this.event.target.checked) {
    data.title = null;
    const mrs = document.getElementById("mrs");
    mrs.checked = false;
  }
}

// Set values
function setFirstName() {
  data.firstName = this.event.target.value;
}
function setLastName() {
  data.lastName = this.event.target.value;
}
function setProvince() {
  data.province = this.event.target.value;
}
function setNumber() {
  data.number = this.event.target.value;
}
function setEmail() {
  data.email = this.event.target.value;
}
function setPickedDate() {
  data.date = this.event.target.value;
}

// Clear fields
function discard() {
  const errors = document.querySelectorAll("p.error");
  errors.forEach((error) => {
    error.classList.remove("show");
  });

  data.title = null;
  data.firstName = "";
  data.lastName = "";
  data.province = "";
  data.number = "";
  data.email = "";
  data.date = "";
}

// Validate fields
function validate() {
  const titleError = document.querySelector("p.error#title");
  const firstNameError = document.querySelector("p.error#first-name");
  const lastNameError = document.querySelector("p.error#last-name");
  const provinceError = document.querySelector("p.error#province");
  const numberError = document.querySelector("p.error#phone");
  const emailError = document.querySelector("p.error#email");
  const dateError = document.querySelector("p.error#date");

  let setReturn = 0;

  if (data.title === null) {
    if (!titleError.classList.contains("show"))
      titleError.classList.add("show");
    setReturn = 1;
  } else {
    titleError.classList.remove("show");
  }

  if (data.firstName === "") {
    if (!firstNameError.classList.contains("show"))
      firstNameError.classList.add("show");
    setReturn = 1;
  } else {
    firstNameError.classList.remove("show");
  }

  if (data.lastName === "") {
    if (!lastNameError.classList.contains("show"))
      lastNameError.classList.add("show");
    setReturn = 1;
  } else {
    lastNameError.classList.remove("show");
  }

  if (data.province === "") {
    if (!provinceError.classList.contains("show"))
      provinceError.classList.add("show");
    setReturn = 1;
  } else {
    provinceError.classList.remove("show");
  }

  if (!/^(\+971)?[0-9]{9}$/.test(data.number)) {
    if (!numberError.classList.contains("show"))
      numberError.classList.add("show");
    setReturn = 1;
  } else {
    numberError.classList.remove("show");
  }

  if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      data.email
    )
  ) {
    if (!emailError.classList.contains("show"))
      emailError.classList.add("show");
    setReturn = 1;
  } else {
    emailError.classList.remove("show");
  }

  if (data.date === "") {
    if (!dateError.classList.contains("show")) dateError.classList.add("show");
    setReturn = 1;
  } else {
    dateError.classList.remove("show");
  }

  return setReturn === 0 ? true : false;
}

function showModal() {
  if (validate()) {
    const modal = document.querySelector("div.modal");
    modal.classList.add("show");
  }
}
