import styles from './weatherMainInfo.module.css';


export default function WeatherMainInfo({weather}){
    
    return(
    <div>
         <div><strong> Location: </strong>{weather?.location.name}, <strong>Country:</strong> {weather?.location.country}</div>
         <div> <strong> Weather: </strong> {weather?.current.condition.text}, <strong>Temp:</strong> {weather?.current.temp_c}º </div>
                  
         <div>
            <div>
                <img src= {`http:${weather?.current.condition.icon}`} 
                width = "100"
                alt={weather?.current.condition.text}  
                />
            </div>
        </div>
        
        <iframe 
            className={styles.weatherMainInfo}
            title ="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29989.25946325226!2d${weather?.location.lon}9!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scu!4v1672760948736!5m2!1ses!2scu`}
           
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        
    </div>
    )
    
}
