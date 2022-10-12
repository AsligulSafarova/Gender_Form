import React from 'react';
import {Link} from "react-router-dom";
import s from "./style.module.sass";

export default function NavBar() {
  return (
    <nav className={s.container}>
<Link to="Form"> AddForm</Link>
<Link to="PageContainer"> PageContainer</Link>
    </nav>
  )
}
