const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const contactInput = document.getElementById("contact");

const addBtn = document.getElementById("add");
const tbody = document.getElementById("tbody");

const users = [];

function init() {
  let lUsers = localStorage.getItem("users");
  users = JSON.parse(lUsers);
  displayData();
}
init();

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const user = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value,
    contact: contactInput.value,
  };

  users.push(user);

  localStorage.setItem("Users", JSON.stringify(users));

  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  contactInput.value = "";
  tbody.innerHTML = "";
  displayData();
});

function displayData() {
  users.forEach((user) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const email = document.createElement("td");
    const age = document.createElement("td");
    const contact = document.createElement("td");
    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
      removeUser(index);
    });

    name.innerText = user.name;
    email.innerText = user.email;
    age.innerText = user.age;
    contact.innerText = user.contact;
    row.append(name);
    row.append(email);
    row.append(age);
    row.append(contact);
    row.append(deleteBtn);

    tbody.append(row);
  });
}

function removeUser(id) {
  const newUsers = users.filter((user, index) => {
    return index !== id;
  });
  users = [...newUsers];
  localStorage.setItem("Users", JSON.stringify(users));
  tbody.innerHTML = "";
  displayData();
}
