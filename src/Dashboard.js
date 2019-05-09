import React, {Component} from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Ticker from './components/Ticker/Ticker';
import AllMarket from './components/AllMarket/AllMarket';
import {tickerBnb, tickerAtom, tickerEos, tickerXrp, market} from './services/Stream'
import './Dashboard.css';

class Dashboard extends Component{

  constructor(props) {
      super(props);
      this.state = {
          bnbTicker: {},
          eosTicker: {},
          xrpTicker: {},
          atomTicker: {},
          allMarket: []
      }
  }

  componentDidMount() {
    market.onmessage = (res) => {
        this.setState({ allMarket: JSON.parse(res.data)});
    };
    tickerBnb.onmessage = (res) => {
        this.setState({ bnbTicker: JSON.parse(res.data)});
    };
    tickerEos.onmessage = (res) => {
        this.setState({ eosTicker: JSON.parse(res.data)});
    };
    tickerXrp.onmessage = (res) => {
        this.setState({ xrpTicker: JSON.parse(res.data)});
    };
    tickerAtom.onmessage = (res) => {
        this.setState({ atomTicker: JSON.parse(res.data)});
    };
      /*UserService.getListenKey().then((res) => {
          console.log(res);
      });*/

  }

  componentWillUnmount() {
      market.close();
      tickerXrp.close();
      tickerEos.close();
      tickerAtom.close();
      tickerBnb.close();
  }


  render(){
      return (
          <section>
              <Jumbotron/>
              <div className="container">
                  <div className="row">
                      <div className="col-3">
                          <Ticker streams={this.state.bnbTicker}/>
                      </div>
                      <div className="col-3">
                          <Ticker streams={this.state.eosTicker}/>
                      </div>
                      <div className="col-3">
                          <Ticker streams={this.state.xrpTicker}/>
                      </div>
                      <div className="col-3">
                          <Ticker streams={this.state.atomTicker}/>
                      </div>
                  </div>
                  <AllMarket market={this.state.allMarket}/>
              </div>

          </section>
      );
  }
}

export default Dashboard;
