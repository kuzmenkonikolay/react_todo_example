import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-headr';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

const App = () => {
    return <div>
        <AppHeader/>
        <SearchPanel/>
        <ToDoList/>
    </div>;
};

ReactDOM.render(<App/>, document.getElementById('root'));