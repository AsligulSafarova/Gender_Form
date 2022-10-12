import React, {useContext}from 'react';
import {Context} from "../../context";
import s from "./style.module.sass";
import NoUsers  from '../NoUsers';
import GenderContainer from '../GenderContainer';


export default function ContainerUser() {
    const {users} = useContext(Context);
    const list= [];

users.forEach(user=>{
 const gend = list.find(elem => elem.gend_num === user.gender);
 if(gend !== undefined) {
   gend.users.push(user);
 }else{
  list.push({
    gend_num:user.gender,
    users: [user]
  })
 }
});

list.sort((a,b)=>+a.gend_num - +b.gend_num);

  return (
    <div className={s.container}>
{
    users.length === 0 ?
  <NoUsers/>
  :
   list.map(el=><GenderContainer key={el.gend_num} {...el}/>)
}
    </div>
  )
}
