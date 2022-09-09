import { Component } from 'react';
import { nanoid } from 'nanoid'
import { InputForm } from './InputForm/InputForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  formSubmit = (event, name, number) => {
    event.preventDefault();
    event.target.reset();
    console.log(event.target);
    this.setState(prevState => {
      return {contacts: [...prevState.contacts, { id: nanoid(), name: name, number: number }]};
    });
  };

  filterOperator = (event) => {
    this.setState({filter: event.target.value.toLowerCase()});
  };

  render() {
    const currentContacts = this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter))
    return (
      <div>
        <h1>Phonebook</h1>
        <InputForm formSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter filer={this.state.filter} filterOperator={this.filterOperator}/>
        <ContactsList currentContacts={currentContacts} />
      </div>
    );
  };
};

export default App;