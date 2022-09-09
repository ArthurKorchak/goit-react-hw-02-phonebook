import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

export class Contact extends Component {
    render() {
        return (
            this.props.currentContacts.map(item => (
                <li key={item.id} className={s.contact}>
                    <p>{item.name}: <span>{item.number}</span></p>
                    <button name={item.id} onClick={this.props.deleteContact}>Delete</button>
                </li>
            ))
        );
    };
};

Contact.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    currentContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};