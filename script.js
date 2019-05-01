"use strict";

class Contact {
  constructor(name, phone, email, relation) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.relation = relation;
  }
  //returns a properly formatted string for this contact
  print() {
    return `${this.name} | P: ${this.phone} | E: ${this.email} | R: ${this.relation}`;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [
      new Contact("Kazuma Kiryu", "080.1234.5678", "kiryu@dragonofdojima.net", "My Dude"),
      new Contact("Goro Majima", "080.8765.4321", "majima@everywhere.net", "Nutjob")
    ];
  }
  //add a new contact containing the given info
  add(info) {
    this.contacts.push(new Contact(info[0], info[1], info[2], info[3]));
  }
  //delete the contact at the given index
  deleteAt(index) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts.splice(index, 1);
    } else {
      console.log("Invalid index.");
    }
  }
  //print all the contacts
  print() {
    for (let index in this.contacts) {
      console.log(`${index}. ${this.contacts[index].print()}`);
    }
  }
}

//needed variables
const addressBook = new AddressBook();
let userChoice = "";

//main loop of the program
while (userChoice.toLowerCase() !== "quit") {
  userChoice = prompt("Add, Remove, Print, or Quit?");
  switch (userChoice.toLowerCase()) {
    case "add":
      let info = [];
      info.push(prompt("Name?"));
      info.push(prompt("Phone?"));
      info.push(prompt("Email?"));
      info.push(prompt("Relation?"));
      addressBook.add(info);
      break;
    case "remove":
      addressBook.deleteAt(prompt("Index to delete?"));
      break;
    case "print":
      addressBook.print();
      break;
    case "quit":
      console.log("Farewell.");
      break;
    default:
      console.log("Invalid command.");
  }
}