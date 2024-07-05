/**
 * 
    <div id="parent">
        <div id="child">
            <h1>Hello!!</h1>
        </div>
    </div>
 *   
 */

const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement(
    'div', 
    { id: "parent" },
    [
        React.createElement(
            'div', 
            { id: "child1" }, 
            [
                React.createElement('h1', {}, "Hello!!"),
                React.createElement('h1', {}, "Hello!!")
            ]
        ),
        React.createElement(
            'div', 
            { id: "child2" }, 
            [
                React.createElement('h1', {}, "Hello!!"),
                React.createElement('h1', {}, "Hello!!")
            ]
    )
    ]
);

root.render(parent);

