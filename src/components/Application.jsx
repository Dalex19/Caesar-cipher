import { useState } from "react"
import style from '../styles/application.module.css'

export const Application = () => {
  const [state, setState] = useState({ value: "NGNPNE CBE YN ZNÑNAN" });

  const handleChange = (x) => {
    setState({ value: rot13(x.target.value) });
  };

  return (
    <div className={style.app_conteiner}>
      <h1 className={style.title}>Caesar cipher</h1>
      <div className={style.first_part}>
        <span>Introduce el texto a cifrar</span>
        <input
          onChange={handleChange}
          className={style.inputcito}
          placeholder="Atacar por la mañana"
        />
      </div>
      <LastPart value={state.value} />
    </div>
  );
};

const LastPart = (prop) => {
  return (
    <div className={style.last_part}>
      <span>Resultado</span>
      <p className={style.result}>{prop.value}</p>
    </div>
  );
};

function rot13(str) { 
    var newStr = "";
      const input = str.toUpperCase();
    for(var i=0;i<str.length;i++){
      if(input.charCodeAt(i)>=65&&input.charCodeAt(i)<=90){
        newStr+=String.fromCharCode((input.charCodeAt(i)+13-65)%26+65);
      }else{
        newStr+=String.fromCharCode(input.charCodeAt(i));
      }
    }
    return newStr;
  }