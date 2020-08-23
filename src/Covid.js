
import React from "react";
import { Cards, Chart, CountryPicker, Footer, MyForm} from "./Components";
import styles from "./App.module.css";
import "./index.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.jpg";

class Covid extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
        <div className="content">
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
      
        <h3>
            <a href="https://www.covid19india.org"  >Go for Perticular State Wise data for India only</a>
        </h3>
       
        <MyForm />
        <br/>
        <br/>
        <text>
          <b>Global and Country Wise Cases of Corona Virus</b>
        </text>
      
    

       
        <br />
        <Cards data={data} country={country} />

        <br />
        <text>
          <i>(For a particular select a Country from below)</i>
        </text>
        <br/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />


        <Footer /> 

       </div>
      </div>
    );
  }
}

export default Covid;
