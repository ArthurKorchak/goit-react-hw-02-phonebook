import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './InputForm.module.css';

export class InputForm extends Component {
    state = {
        name: '',
        number: ''
    };

    inputOperator = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        } else if (event.target.name === 'number') {
            this.setState({ number: event.target.value });
        } else {
            throw new Error('Unknown input errord');
        };
    };

    render() {
        return (
            <form className={s.form} onSubmit={event => this.props.formSubmit(event, this.state.name, this.state.number)}>
                <label className={s.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.inputOperator}
                    />
                </label>
                <label className={s.label}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.phone}
                        onChange={this.inputOperator}
                    />
                </label>
                <button type='submit'>Add contact</button>
            </form>
        );
    };
};

InputForm.propTypes = {
    formSubmit: PropTypes.func.isRequired,
};