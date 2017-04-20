import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardText} from 'material-ui/Card';

const styles = {
  headline: {
    fontSize: 29,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class WeatherTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    const tabs = this.props.reports.map((dayReport, index) => {
      const date = new Date(dayReport[index].dt_txt) ;
      const date1 = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate(); 
      const tab = dayReport.map((timeWiseReport, index1)=> {
        return(
            <Card key={index1} >
              <CardText>
                <div style={{fontSize: 25}}> 
                  <p> <b>Time: </b>{timeWiseReport.dt_txt} </p>
                  <p> <b>Temp: </b>{timeWiseReport.main.temp} Kelvin</p>
                  <p> <b>Humidity: </b>{timeWiseReport.main.humidity}%</p>
                  <p> <b>Overall Weather: </b>{timeWiseReport.weather[0].main}</p>
                </div>
              </CardText>
            </Card>
          );
      });
      return(
        <Tab label={date1} key={index} value={index} style={styles.headline}>
          { tab }
        </Tab>
      );  
    });

    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
      { tabs }
      </Tabs>
    );
  }
}

export default WeatherTabs;
