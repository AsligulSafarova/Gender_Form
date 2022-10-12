import React, {useContext} from 'react';
import {Context} from "../../context";
import s from "./style.module.sass";
import Button from "../UI/Button";

export default function UserItem({id,title,avatar}) {
  const {dellUser} = useContext(Context)
  return (
    <div className={s.container}>
    <img src={avatar} alt="avatar" className={s.img} />
     <p>{title}</p>
     <div className={s.button} onClick = {()=>dellUser(id)}>
     <Button/>
     </div>
    </div>
  )
}
