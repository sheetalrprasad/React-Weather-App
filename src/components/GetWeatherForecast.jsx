import React, { Component } from "react";

class GetWeatherForecast extends Component{
//   constructor(){
//       super();
//   }

  getForecast(){

    // fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-key": "e78d17f35bmsh9c0711d85918038p1fd0d0jsna20d9c398e21",
	// 	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	//     }
    // })
    // .then(response => {
	// console.log(response);
    // })
    // .catch(err => {
	// console.error(err);
    // });
  }

//   return (
//     <div>
//         <h2> Current Weather Conditions </h2>
//         <div>
//             {JSON.stringify(responseObj)}
//         </div>
//         <button onClick={this.getForecast}>Get Forecast</button>
//     </div>
//     )


  render(){
      return(
      <div className="container">
          <input id="city" type="text" placeholder="Enter City" maxLength="100"></input>
          <br></br>
          <input id="r1" type="radio"/>
          <label htmlFor="r1">Celcius</label>
          <input id="r2" type="radio"/>
          <label htmlFor="r2">Farhenit</label>
          <br/>
          <button type="submit" onClick={this.getForecast}>Submit</button>
      </div>)
  }
}

export default GetWeatherForecast;