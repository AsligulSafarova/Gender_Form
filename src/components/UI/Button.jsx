import React from 'react';
import s from "./style.module.sass";

export default function Button(props) {
  return (
    <button className={s.button} {...props}>X</button>
  )
}
