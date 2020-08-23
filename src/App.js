
// import React from "react";
// import { Cards, Chart, CountryPicker, Footer, MyForm} from "./Components";
// import styles from "./App.module.css";
// import { fetchData } from "./api";
// import coronaImage from "./images/image.jpg";

// class App extends React.Component {
//   state = {
//     data: {},
//     country: "",
//   };
//   async componentDidMount() {
//     const fetchedData = await fetchData();
//     this.setState({ data: fetchedData });
//   }
//   handleCountryChange = async (country) => {
//     const fetchedData = await fetchData(country);
//     this.setState({ data: fetchedData, country: country });
//   };
//   render() {
//     const { data, country } = this.state;
//     return (
//       <div className={styles.container}>
//         <img className={styles.image} src={coronaImage} alt="COVID-19" />
//         <br />

//         <h3>
//             <a href="https://www.covid19india.org">Go for Perticular State Wise data for India only</a>
//         </h3>
//         <text>
//           <b>Global and Country Wise Cases of Corona Virus</b>
//         </text>
//         <br />
//         <text>
//           <i>(For a particular select a Country from below)</i>
//         </text>

//         <MyForm />
    

//         <br />
//         <br />
//         <Cards data={data} country={country} />
//         <CountryPicker handleCountryChange={this.handleCountryChange} />
//         <Chart data={data} country={country} />

//         <Footer /> 

       
//       </div>
//     );
//   }
// }

//export default App;


import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
 
import Home from './components2/Home';
import About from './components2/About';
import Contact from './components2/Contact';
import Error from './components2/Error';
import Covid from './Covid';
import Weather2 from './components2/Weather2';

import Navigation from './components2/Navigation';
// import axios from 'axios';

// import {Provider} from './Context';
// import Actions from './Actions/Actions';



class App extends Component {
  render() {

 
    return (      
      // <Provider value={contextValue}>
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
                <ul className="header">
             <li><Route path="/" component={Home} exact/></li>
            <li> <Route path="/covid" component={Covid} /></li>
            <li> <Route path="/about" component={About}/></li>
            <li><Route path="/booking" component={Contact}/></li>
            <li><Route path="/Weather2" component={Weather2}/></li>
            <Route component={Error}/>

            </ul>
            
           </Switch>

         
        </div> 
      </BrowserRouter>
      // </Provider>
    );
  }
}
 
export default App;