import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './Containers/Home/Home';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Resume from './Containers/Resume/Resume';
import { Route, Switch } from 'react-router-dom';
import Ecommerce from './Containers/Projects/Ecommerce/Ecommerce';
import Landing from './Containers/Projects/Landing/Landing';
import WeatherFinder from './Containers/Projects/WeatherFinder/WeatherFinder';

class App extends React.Component {
    render() {
      return (
        <div>
          <Layout>
              <Switch>
                <Route path="/PortfolioSite/about" component={About}/>
                <Route path="/PortfolioSite/contact" component={Contact}/>
                <Route path="/PortfolioSite/resume" component={Resume}/>
                <Route path="/PortfolioSite" exact component={Home} />
                <Route path="/PortfolioSite/ecommerce" component={Ecommerce}/>
                <Route path="/PortfolioSite/winerylandingpage" component={Landing}/>
                <Route path="/PortfolioSite/weatherfinder" component={WeatherFinder}/>
              </Switch>
          </Layout>
        </div>
      )
    }
}

export default App;
