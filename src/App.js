import React from 'react';
import './App.css';
import ListContacts from './listcontacts'

class App extends React.Component {
  state = {
    contactsArray: [
      {
        "id": "zaid",
        "name": "Zaid raza",
        "email": "zaidraza@gmail.com"
      }, {
        "id": "uzair",
        "name": "Uzair khan",
        "email": "uzair@gmail.com"
      }, {
        "id": "zofeen",
        "name": "Zofeen khan",
        "email": "zofeen@gmail.com"
      }, {
        "id": "danish",
        "name": "Danish Jawed",
        "email": "danish@gmail.com"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contactsArray: state.contactsArray.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contactsArray} />
      </div>
    )
  }
}





export default App;
