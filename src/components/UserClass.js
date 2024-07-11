import React from "react";

/** When a class based component mounted or rendered to the UI,
 * a new instance of that class is created
 * the first thing that executes is the constructor
 * then the render method gets executed
 * after that the componentDidMount method is called
 * 
 * Order of execution in parent child 
 * 
 *  Parent constructor called
    Parent render called

    Child constructor called
    Child render called
    Child componentDidMount called

    Parent componentDidMount called

    componentDidMount() is used to make an API call
    We do this beacause it executes after the cimponent renders

    And then componentDidUpadte() is called

    At last componentWillUnMount() is called

    Refer to understand component life cycle in React
    https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    WHAT IS UNMOUNTING IN FUNCTIONAL COMPONENTS?

    -- In the return function of useEffect we can do clean ups

    useEffect(() => {
        
        return(() => {
            // Here

            clearInterval(timer);
        });
    });
 * 
 * 
 */

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        //console.log("class props",props);
        //console.log("Child constructor called")
    }

    componentDidMount() {
        //console.log("Child componentDidMount called");
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        //console.log("Child render called");

        const {name, role, email} = this.props.data;
        //const {count} = this.state;
        return(
            <div className="user-card">
                {/* <div className="count-container">
                    <p>{count}</p>
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}>Increment Count</button>
                </div> */}
                <h4>{name}</h4>
                <p>{role}</p>
                <p>{email}</p>
            </div>
        )
    }

}

export default UserClass;