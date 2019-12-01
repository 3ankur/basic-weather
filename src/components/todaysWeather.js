import React from "react";

const toCel =(t)=>{
    return ( t-273.15).toFixed(2);
 }

const CurrentTemp = ({tmpData})=>{
    return(
        <div className="mt-4">
            <h5>Today's Weather</h5>
            <div className="todays temprature row m-4 p-3 border">
            
            <div className="col-3">
                <label>Min</label><br/>
        <span>{ toCel(tmpData.temp_min)  || "N/A"}</span><span>&#8451;</span>
            </div>
            <div className="col-3">
                <label>Max</label><br/>
                <span>{   toCel(tmpData.temp_max)  || "N/A"}</span><span>&#8451;</span>
            </div>
            <div className="col-3">
                <label>Humidity</label><br/>
                <span>{ tmpData.humidity || "N/A"}</span>
            </div>
        </div>
        </div>
      
    );
};

export default CurrentTemp;