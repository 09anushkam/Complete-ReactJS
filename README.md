# Initial Setup  

1. `npm create vite@latest` - to create react app  
2. `cd project_folder`  
3. `npm install` - to install node modules  
4. `npm run dev` - to run react app  

## Tailwind css  

1. `npm install -D tailwindcss postcss autoprefixer`  
2. `npx tailwindcss init -p`  
3. make changes in content:[] of tailwind.config.js -
   
        content: [  
        "./index.html",  
        "./src/**/*.{js,ts,jsx,tsx}",  
       ],
   
5. inject tailwind in index.css -

       @tailwind base;  
       @tailwind components;  
       @tailwind utilities;`  

## Deploy Vite React App on Netlify  

1. `npm run build`  
2. Drag and Drop dist folder on netlify  

## Learnings  

### Lec2 - Creating Components  

- Creating Components dir in src  
- Creating componentname.jsx file in Components dir
- rafce - Snippet for boiler plate for componentname.jsx/app.jsx

### Lec3 - Components Reusability  

- Creating array and applying map method on that array and returning all the elements of array in html with dynamic values of all elements to display it  
-        arr.map(()=>(html code))  

### Lec4 - Conditional Rendering  

- Card.jsx is used  
- eg:

      <button className={`px-4 py-1 ${elem.instock?'bg-blue-600':'bg-red-600'} rounded text-xs text-zinc-100 mt-3`}> <!-- here conditional rendering is used for button color -->  
      {elem.instock ? "In Stock" : "Out of Stock"} <!-- this is conditional rendering -->  
      </button>  

### Handling events  

- Cardz.jsx is used  
- `onClick={handleClickDownload}` - on button

### Lec5,6,7 useState hook  

-     const [val,setVal] = useState(initial_value)  
-     <button onClick={()=>setVal(()=>val.filter((item)=>item%2!==0))} className='px-2 py-1 text-white rounded-full bg-blue-500'>click</button>`  <!--setting some value onclick-->  
-     <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} className={`px-3 py-1 ${val.isBanned?'bg-blue-600':'bg-red-600'} text-xs rounded-full text-white`}>Change</button>```  <!--setting some styling onclick-->  

### Lec8 passing data via props from parent to child  

Basic example :  

- App.jsx (parent) -

      <Card text="Know More" color="bg-blue-600"/>  <Card text="Download" color="bg-red-600"/>

- Card.jsx (child) -  

        const Card = ({text,color}) => {  
        return (  
        <button className={`px-3 py-1 ${color} text-zinc-100 text-xs m-2 rounded`}>{text}</button>  
        )  
        }  

### Lec9 exercise of states and component  

Extra : style.module.css also import it for using  

### Lec10 Form Handling  

- To stop reloading of page after form submission we use e.preventDefault()  
we have 3 methods :  
- useRef => is tareeke mein hum har input ko select kar lete hai and unki value tab nikalte hai jab form submit hota hai  
- controlled components => updating real time data using state  
- react hook form (mostly used)  `npm install react-hook-form`  

### Lec11 exercise of form handling  

### Lec12 Routing  

- `npm i react-router-dom` - install react-router-dom  
- `import {BrowserRouter} from 'react-router-dom'` - import in main.jsx for using ...

        ReactDOM.createRoot(document.getElementById('root')).render(  
          <React.StrictMode>  
            <BrowserRouter>  
              <App />  
            </BrowserRouter>  
          </React.StrictMode>,  
        )
  
- Make a folder name utils in src  
inside of utils make Routing.jsx  
- import all the pages and routes,route in Routing.jsx

        import {Route,Routes} from 'react-router-dom'  
        import Home from "../Components/Home"  
        import About from "../Components/About"  
        import User from "../Components/User"
  
- using routes and route in Routing.jsx

        <Routes>  
          <Route path="/" element={<Home/>} />  
          <Route path="/user" element={<User/>} />  
          <Route path="/about" element={<About/>} />  
        </Routes>
  
- `import {Link,NavLink} from 'react-router-dom'` - import in Nav.jsx for using it  
- `<Link to="/user">User</Link>` - using link in Nav.jsx  
- instead of `<Link></Link>`, use `<NavLink></NavLink>`  
`<NavLink></NavLink>` takes a function(callback) for styling purpose  
- In App.jsx, import - `import Nav from "./Components/Nav"` and `import Routing from "./utils/Routing"` and use as - `<Nav/> <Routing/>`

- Dynamic styling on NavLink  
1. Dynamic style inside {} open brackets and returing span tag  
2. Dynamic styling using style  
3. Dynamic styling using className  

### Lec13 Dynamic/child routing  

- Create UserDetail.jsx in Components  
- `import { useNavigate, useParams } from 'react-router-dom'` - import useParams and useNavigate in UserDetail.jsx
- Use it in UserDetail.jsx

        const {name}=useParams()  
        const navigate=useNavigate()  <!-- for navigating using button  -->  
        const GoBackHandler=()=>{  
        navigate("/user")  
        }
- Use it in UserDetail.jsx

        <button onClick={GoBackHandler} className='mt-5 text-white px-3 py-2 bg-red-300'>Go back</button>  
- In Routing.jsx for dynamic routing
  
        <Route path="/user/:name" element={<UserDetail/>} />   
- In User.jsx, Add Links for directing to particular user dynamically  


- For not keeping UserDetail as separate page and display it on the same page,
- import - `import {Link,Outlet} from 'react-router-dom'`  
- Use - `<Outlet/>` which acts as a placeholder in User.jsx itself  
Also do some changes in Routing.jsx i.e. make nested route User->UserDetail

        <Route path="/user" element={<User/>} >
            <Route path="/user/:name" element={<UserDetail/>} />
        </Route>

- Flow :  
main->BrowserRouter->App(tag)  
App->Nav,Routing(routing)  
Routing->Home,User,UserDetail,About(routing)  
User->UserDetail(dynamic routing)  

### Lec14 Api Integration  

- Show.jsx  
- `npm i axios`  
- `import axios from 'axios'` - import axios  
- useState and then make function to get data through api  
- axios gives us implementation of ajax(async js and xml) - fetch/axios  
- Use of axios :

        axios.get("api-link")  
        .then((e)=>{  
        setState(e.data)  
        })  
        .catch(e=>console.log(e));  

Life cycle of components -  
Component Mount (creation)  
Component Update (changes in same page)  
Component Unmount (deletion)  

### Lec15 useEffect  

- Services.jsx, Show.jsx  
to avoid clicking and direct rendering of components we use useEffect
- import useEffect -  

      import { useEffect } from 'react' 

      useEffect(() => {  
        console.log("Service component is created!")
      return () => {  
        console.log("Service component is deleted!")  
      }
      }, [second])  
    
- second - `on clicking 2nd button service page gets re-render` where as on clicking 1st button service page do not gets re-render  
if u pass empty array in 2nd argument then rerendering of that page stops even on state change  

-> instead of importing axios in every file import it in utils/axios.jsx and use it's reference in every page wherever required  
utils/axios.jsx -  

    import axios from "axios";  
     const instance=axios.create({  
    baseURL:"https://fakestoreapi.com/",  
    })  
    export default instance  

- Use this reference in other pages for importing axios and then  
    `import axios from '../utils/axios'` 
- Use it as -  

        const api="/products"; 
        axios.get(api).then(callback).catch(callback)  

### Lec16 Context Api  

1. Create Context dir in src and Context.jsx inside Context dir  
2. We wrapped the browerRouter and app by Context  
3. We created context inside Context.jsx file  

Context.jsx -  

    import React, { createContext, useState } from 'react'

    export const UserContext = createContext();
    const Context = (props) => {
    const [users,setUsers]=useState([
        { id:0,username:"John Doe",city:"USA",},
        { id:1,username:"Jenny Doe",city:"Colambia",},
        { id:2,username:"Joseph Doe",city:"Korea",},
    ]);

      return (
        <UserContext.Provider value={{users,setUsers}}>
          {props.children}
        </UserContext.Provider>
      );
    }

    export default Context  
