import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import initialContacts from "../contacts.json";
import { useState } from "react";

export default function App() {
  const [contact, setContact] = useState([]);

  return (
    <div className="css.container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
