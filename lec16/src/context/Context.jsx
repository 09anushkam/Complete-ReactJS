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