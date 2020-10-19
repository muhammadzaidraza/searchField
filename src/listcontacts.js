import React from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class ListContacts extends React.Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }
    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    render() {

        let showingContacts;
        if (this.state.query) {
            const match = RegExp(escapeRegExp(this.state.query), 'i')
            showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
        } else {
            showingContacts = this.props.contacts
        }

        showingContacts.sort(sortBy("name"))

        return (
            <div>
                {JSON.stringify(this.state)}
                <div>
                    <input
                        type="text"
                        placeholder="Search contact"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol >
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className="contact-list-item">
                            <div className="contact-pic" style={
                                { backgroundImage: `url( ${contact.pic} )` }
                            } />
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove">remove</button>
                        </li>
                    ))}
                </ol>
            </div>

        )
    }
}

export default ListContacts 