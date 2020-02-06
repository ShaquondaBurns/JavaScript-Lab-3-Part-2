class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  add(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }

  findContactByName(name) {
    return this.contacts.find(contact => contact.name === name);
  }
}

let contactBook = new AddressBook();
contactBook.add("qb","tharealest81@gmail.com", "313.222.2222","Friend");
contactBook.add("Shawn", "slburns@yahoo.com", "248.222.4545");

function display() {
  let container = document.querySelector(".contact-container");
  container.innerHTML = "";
  let counter = 0;

  for (let contact of contactBook.contacts) {
    let card = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = `Name:${contact.name}`;
    card.append(name);

    let email = document.createElement("p");
    email.innerText = `Email:${contact.email}`;
    card.append(email);

    let phone = document.createElement("p");
    phone.innerText = `Phone:${contact.phone}`;
    card.append(phone);

    let relation = document.createElement("p");
    relation.innerText = `Relation:${contact.relation}`;
    card.append(relation);
  

    let icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash");
   icon.setAttribute("index-number", `${counter}`);
   counter++;
    card.append(icon);
  


    container.append(card);
   card.setAttribute("class", "contact-box")


  }
}

display();

let form = document.querySelector("form");
form.addEventListener("submit", addContact);

function addContact(e) {
  e.preventDefault();
  const formData = new FormData(form);

  contactBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
}

let cardsContainer = document.querySelector(".contact-container");
cardsContainer.addEventListener("click", deleted);

function deleted(e){

if (e.target.className === "fas fa-trash"){
  
let trashIndex = e.target.getAttribute("index-number");
contactBook.deleteAt(trashIndex);
display();
}
}
