import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make awesome app'),
            this.createTodoItem('Have a lunch')
        ],
        term: ''
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id );

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        });
    };

    createTodoItem(label) {
        return {
            label,
            id: this.maxId++,
            important: false,
            done: false
        }
    }

    addNewTodo = (title) => {
        if(title.length > 0){
            this.setState(({ todoData }) => {
                const newArray = [...todoData, this.createTodoItem(title)];

                return {
                    todoData: newArray
                }
            });
        }else{
            alert('Title should present');
        }
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id );
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    search = (items, term) => {
        if(term.length === 0){
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    render() {
        const { todoData, term } = this.state;

        const visibleItems = this.search(todoData, term);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel onChange={this.onSearchChange} />
                <ItemStatusFilter/>
            </div>
            <ToDoList todos={ visibleItems } onDeleted={(id) => this.deleteItem(id) }
                      onToggleImportant={ this.onToggleImportant }
                      onToggleDone={ this.onToggleDone }  />
            <ItemAddForm addNewItem={(title) => this.addNewTodo(title) }/>
        </div>;
    }
}