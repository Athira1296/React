import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor called");
    }

    async componentDidMount() {
        console.log("Parent componentDidMount called");

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        //console.log("data", data);
    }
    
    render () {
        console.log("Parent render called");

        const user = {
            name: 'Athira',
            role: 'Developer',
            email: 'athi@gmail.com'
        };

        return (<div>
            <h1>This is about page</h1>
            <h3>This is a food ordering app!</h3>
    
            <div>
                <UserClass data={user}/>
            </div>
        </div>);
    } 
}
export default About;