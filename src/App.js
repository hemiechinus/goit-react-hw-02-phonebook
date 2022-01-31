import { Component } from "react";
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  formSubmit = (obj) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === obj.name.toLowerCase()
      )
    ) {
      return alert("This contact has already been added to the list");
    }

    this.setState(({ contacts }) => ({
      contacts: [obj, ...contacts],
    }));
  };

  handleContacts = () => {
    const { filter, contacts } = this.state;
    const onContactsFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(onContactsFilter)
    );
  };

  filterChange = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

   componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const updatedContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (updatedContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    }
  }

  render() {
    const { deleteContact, formSubmit, filterChange } = this;
    const { filter } = this.state;
    const getContacts = this.handleContacts();
    return (
      <div >
        <h1>Phonebook</h1>
        <ContactForm formSubmit={formSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={filterChange} />
        <ContactList getContacts={getContacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default App;