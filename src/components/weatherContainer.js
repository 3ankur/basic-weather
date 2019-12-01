import React from "react";
import SearchCity from "./searchCity";
import WeatherTable from "./weatherTable";
import TodayWeather from "./todaysWeather";
const API_KEY = "e65fee47821b529e09d654266b9e11e6";

class WeatherContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cityList:null,
            currentWeather:null,
            errMsg:""
        }
    }

    searchHandeler = (cityName)=>{
        this.getForcastWeather(cityName);
        this.getCurrentWeater(cityName);
    }

    getCurrentWeater = (city) =>{

       let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
       window.fetch(url)
       .then(  (resp) => resp.json()) 
       .then((data) =>{
        console.log("its the testing == Weater", data)
        if(data.cod==="404"){
           
        }else{
            this.setState({
                currentWeather:data.main,
                errMsg:""
             });


        }
       
         })
         .catch((e)=>{
             console.log(e);
         })
    }

    getForcastWeather = (city) => {

        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&cnt=5`;

        window.fetch(url)
        .then(  (resp) => resp.json()) 
        .then((data) =>{
         console.log(data)
         if(data.cod==="404"){
            this.setState({
                cityList:null,
                currentWeather:null,
                errMsg:data.message
            })
         }else{
            this.setState({
              
                cityList:data,
                errMsg:""
             });
         }
        
          })
          .catch((e)=>{
              console.log(e);
          })
        
       
    }

    render(){
        return(
            <div className="weater-container  mt-4 p-3">
                <SearchCity onCitySearch={this.searchHandeler} />
              
                {
                    this.state.currentWeather && <TodayWeather  tmpData = {this.state.currentWeather} />
                }
                {
                     this.state.errMsg  && <span>{ this.state.errMsg  }</span>
                }
                {
                    this.state.cityList && <div className="m-5">  <WeatherTable forcastData={this.state.cityList} /></div>
                }
               
        </div>
        )
    }
}
export default WeatherContainer;