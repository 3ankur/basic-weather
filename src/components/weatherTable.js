import React from "react";

const toCel =(t)=>{
   return ( t-273.15).toFixed(2);
}

const WeatherTable = ({forcastData})=>{
return(
    <div>
        <h5>5 Days forecast</h5>
        <table className="table">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>
                    Day temperature
                    </th>
                    <th>
                    Night temperature
                    </th>
                    <th>
                    Humidity
                    </th>
                    </tr>
                    
                    </thead>
                    <tbody>
                        {
                            forcastData.list.map((data)=>{
                               return(
                                <tr key={data.dt}>
                                <td>{data.dt_txt}</td>
                                <td>{( toCel(data.main.temp_max)) }<span>&#8451;</span></td>
                                <td>{ toCel(data.main.temp_min)}<span>&#8451;</span></td>
                                <td>{data.main.humidity}</td>
                                </tr>
                               );
                            })
                        }
                       
                    </tbody>
                
        </table>
    </div>
)
}

export default  WeatherTable;