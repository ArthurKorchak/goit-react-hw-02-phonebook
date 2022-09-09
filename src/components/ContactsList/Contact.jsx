import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
    render() {
        return (
            this.props.currentContacts.map(item => (
                <li key={item.id} className='contact'>
                    <p>{item.name}: <span>{item.number}</span></p>
                </li>
            ))
        );
    };
};

Contact.propTypes = {
    currentContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};