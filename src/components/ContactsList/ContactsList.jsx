import { Component } from 'react';
import { Contact } from './Contact';
import PropTypes from 'prop-types';

export class ContactsList extends Component {
    render() {
        return (
            <ul className='contactsList'>
                <Contact currentContacts={this.props.currentContacts} />
            </ul>
        );
    };
};

ContactsList.propTypes = {
    currentContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};