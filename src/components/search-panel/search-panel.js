import React, { Component } from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onChange = (e) => {
        e.preventDefault();
        const term = e.target.value;
        this.setState({term});
        this.props.onChange(term);
    };

    render () {
        return <input type="text" onChange={this.onChange}
                      className="form-control search-input"
                      placeholder='Type here to search'
                      value={this.state.term}/>;
    }
}
