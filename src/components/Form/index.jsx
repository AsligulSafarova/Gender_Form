import React, {useContext} from 'react';
import {Context} from "../../context";
import Select from 'react-select';
import s from "./style.module.sass";

export default function Form() {
  const {addForm} = useContext(Context);
  const submit =event =>{
    event.preventDefault();
    const{avatar, title, gender} = event.target;
    addForm(avatar.value, title.value, gender.value);
    avatar.value = " ";
    title.value = " ";
  }
    const options_gender = [
        { value: '1', label: 'Mann' },
        { value: '2', label: 'Woman' },
      ]

  return (
    <div className={s.container}>
   <form className={s.form}  onSubmit = {submit}>
    <input type="text" placeholder='Name' name = "title" />
    <input type="url" placeholder='Avatar' name = "avatar" />
    <Select options={options_gender} name ="gender"/>
    <button> Add</button>
   </form>
   </div>
  )
}
