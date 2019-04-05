import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Drink coffee', important: false, id: 1 },
            { label: 'Make awesome app', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id );
            console.log(idx);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        });
    };

    render() {
        const { todoData } = this.state;

        return <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <ToDoList todos={ todoData } onDeleted={(id) => this.deleteItem(id) }/>
        </div>;
    }
}