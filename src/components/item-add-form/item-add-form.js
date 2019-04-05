import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
       this.props.addNewItem(this.state.label);
       this.setState({
           label: ''
       });
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Type here new ToDo item"
                       onChange={this.onLabelChange}
                       className="form-control search-input"
                       value={this.state.label}/>
                <div className="btn-group">
                    <button type="submit" className="btn btn-info">Add Item</button>
                </div>
            </form>
        );
    }
}