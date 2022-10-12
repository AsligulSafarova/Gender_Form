
import { useState } from "react";
import Form from "../../pages/Form";
import {Context} from "../../context";
import {Routes, Route} from "react-router-dom";
import PageContainer from "../../pages/PageContainer";
import NavBar from "../NavBar";


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
      <NavBar/>
      <Routes>
    <Route path ="/Form" element = {<Form/>}/>
   <Route path = "PageContainer" element = {<PageContainer/>}/>
    </Routes>
     </Context.Provider>
    </>
  );
}

export default App;
