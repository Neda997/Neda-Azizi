import React from 'react';
import Tab from './Tab';

function App() {
    const tabs = [
        { title: 'Tab 1', content: <div>Content of Tab 1</div> },
        { title: 'Tab 2', content: <div>Content of Tab 2</div> },
        { title: 'Tab 3', content: <div>Content of Tab 3</div> }
    ];

    return (
        <div className="App">
            <h1>My Tab Project</h1>
            <Tab tabs={tabs} />
        </div>
    );
}

export default App;