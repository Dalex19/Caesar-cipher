import hercules from '../assets/herculesGod.png'
import style from '../styles/home.module.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return(
        <>
        <div className={style.first_part}>
            <FirstPart />
        </div>
        <div className={style.second_part}>
            <SecondPart />
        </div>
        </>
    )
}

const FirstPart = () => {
  return (
    <>
      <h1 className={style.first_part_title}>Cifrado de Cesar</h1>
      <Description />
      <NavLink to="/app" className={style.first_part_a}>Probar</NavLink>
    </>
  );
};
const Description =() =>{
    return(
        <>
            <p className={style.description}>El cifrado César es uno de los primeros métodos de cifrado conocidos históricamente. Julio César lo usó para enviar órdenes a sus generales en los campos de batalla.</p>
            <p className={style.description}>Te interesa comunicarte como lo hacia el emperador Cesar con sus aliados.</p>
        </>
    )
}
const SecondPart = () => {
    return(
        <img src={hercules} alt="Hercules" className={style.second_img}/>
    )
}