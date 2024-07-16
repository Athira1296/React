# My React learning materials and notes

# Parcel
- Dev build
- Local server
- HMR - Hot Module Replacement
- File Watching Algorithm built in C++
- Caching and faster builds
- Image optimisation
- Minification 
- Bundling
- Compressing
- Consistant hashing
- Code splitting
- Differntial Bundling - support older browsers
- Diagnistics
- Error Handling
- Host on https
- Tree shaking - remove unused code
- Different build for dev and prod

# Types of exports and imports
- Default export/ import
    export default Header;
    import Header from "../path";
- Named export/ import
    export const Header
    import { Header } from "../path";

- Named export is used when we have to export multiple things from a single file
- One file can only have a single default export

# Hooks
- Just a normal JS function
    - useState : to create state variables in react
    - useEffect : to do an action once the component is rendered, 
                  takes callback function as 1st argument, dependency array as second argument 

# In depth details on Hooks
- useEffect
    * If the dependency array is not given then useEffect executes in every render cycle
    * If the dependency array is empty i.e. [] then useEffect execute once after the component loads
    * If the dependency array contains a value then useEffect executes on every change of that variable
    useEffect(
        () => {}, // callback function
        [] // Dependency array
    );

- useState
    - Local state variables inside functional component
    - Never create state variables inside if else statements or for loops as it can create inconsistancies in the code
    - Try to keep them inside functional component and on top

# Routing
    - useRouteError hookfor getting error status, error message


# Types of routing in web application
    1. Server side routing (old way : for every route page is refreshed)
    2. Client side routing (Single page applications - SPA)

# Higher oredr component
    - A higher order component is a component that takes a component as input
    and modifies it and returns a component

    - They are pure functions: does not modify its args directly

# Lifting the state

# Props Drilling
- Drill down a value from parent in inner children (The problem of passing props)
- React gives us context api to deal with props drilling

# Context API
- Global data store from where every component can access data
- Consume data from context
    Functional component = useContext()
    Class based component = Context Provider 
        <UserContext.Provider>{(data) => { console.log(data) }}</UserContext.Provider>

