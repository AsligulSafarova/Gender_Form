
import { useState } from "react";
import Form from "../Form";
import {Context} from "../../context";
import ContainerUser from "../ContainerUser";


function App() {
  const [users, setUsers] = useState([]);

const addForm = (avatar, title,gender)=>{
  setUsers([...users,
  {
    id:Date.now(),
    avatar,
    title,
    gender
  }])
};

const dellUser =(id)=> setUsers(users.filter(elem=>elem.id !== id));
const delGender = (gend_num) =>setUsers(users.filter(elem=>elem.gender !== gend_num));

  return (
    <>
    <Context.Provider value = {{users, addForm, dellUser, delGender}}>
    <Form/>
    <ContainerUser/>
    </Context.Provider>
    </>
  );
}

export default App;
