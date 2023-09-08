import { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherMainInfo from './weatherMainInfo';
import styles from './weatherApp.module.css';
   
/*http://localhost:3000/ */

export default function WeatherApp(){
const  [weather, setWeather] = useState(null);

/* useEffect(()=>{},[]); usa dos parametros callback ()=>{} y un arreglo de dependencia[].
Se usa para manejar efectos laterales.
si []  useEffect se ejecuta una vez,
si [stateVar] useEffect se ejcuta cada vez que esa variable cambia su estado*/      

//este useEffect se ejecuta solo una vez cdo se carga la pagina
useEffect(()=>{
    loadInfo();
},[]);     

//este useEffect se ejecuta cada vez setea weather en el input
//se usa para cambiar el nombre de la pestaña cada vez que se busca una ciudad
useEffect(()=>{
    document.title = `Weather | ${weather?.location.name ?? "" }`
},[weather]);  

async function loadInfo(city = 'london'){

    try {
        const request = await fetch(`${process.env.REACT_APP_URL}key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`); //el process.env no me devolvia nada porque el .env debe estar fuera del src junto con los packaje.json
        
        const json = await request.json(); //debe usarse el await para poder ver el resultado del body response de la API
        setWeather(json);

    } catch (error) {
        
    }

}

function handleChangeCity(city){
    setWeather(null);
    loadInfo(city);
   }

    return(

            <div className={styles.weatherContainer}>
                <WeatherForm onChangeCity = {handleChangeCity} />
                  {/* <div>{weather?.current.temp_c}</div>como weather se setea a null en handleChangeCity implica que weather no tendra atributos ni propiedades 
                   en ciertos momentos(en el momento que se crga la info),para ello se usa ? indica que es una porpiedad opcional */}
                <WeatherMainInfo weather= {weather}/>{/*a la props weather de WeatherMainInfo le paso el valor del estado de {weather} */}
            </div>

    );

}