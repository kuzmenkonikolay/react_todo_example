import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {
    getInputValue = () => {
        let title = document.getElementById('new_item_title_input');
        return title.value;
    };

    render() {
        const { addNewItem } = this.props;

        return (
            <div className="item-add-form d-flex">
                <input type="text" placeholder="Type here new ToDo item" id="new_item_title_input" className="form-control search-input"/>
                <div className="btn-group">
                    <button type="button" className="btn btn-info" onClick={ () => addNewItem(this.getInputValue()) }>Add Item</button>
                </div>
            </div>
        );
    }
}