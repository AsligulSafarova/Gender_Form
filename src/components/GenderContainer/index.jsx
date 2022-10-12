import React , {useContext}from 'react';
import {Context} from "../../context";
import Button from '../UI/Button';
import UserItem from '../UserItem';
import {choose_gender} from "./choose_gender";
import s from "./style.module.sass";

export default function GenderContainer({users, gend_num}) {
  const {delGender} = useContext(Context)

  return (
    <div className={s.container}>

    <div className={s.gender}>
     {choose_gender[gend_num]}
     </div>
     <div className={s.users}>
    {
        users.map(elem =><UserItem key={elem.id} {...elem}/>)
    }
   <div className={s.button}  onClick = {()=>delGender(gend_num)}>
    <Button/>
   </div>
     </div>
    </div>
  )
}
