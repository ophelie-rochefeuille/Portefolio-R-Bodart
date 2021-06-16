import React , {Component} from 'react';
import HomePage from './components/homePage/HomePage';
import Header from './components/header/Header';
import PortefolioList from './components/portefolio/PortefolioList';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProjectPage from './components/portefolio/ProjectPage';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';

class App extends Component  {
  state={
    sideDrawerOpen: false
  };

 drawerToggleClickHandler = () => {
this.setState((prevState) =>{
  return{sideDrawerOpen: !prevState.sideDrawerOpen};
});
 };

 backdropClickHandler = () => {
this.setState({sideDrawerOpen: false})
 };

render () {
  let sideDrawer;
  let backdrop;

  if(this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop click={this.backdropClickHandler} />
  }
  return (
    <Router>
 <div className="App">

      <header className="App-header">
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        </header>
        <div className='main-wrapper'>
          <Switch>
        <Route path="/homePage" component={HomePage} />
        <Route path="/portefolio" exact component={PortefolioList} />
        <Route path='/about' component={About}  />
        <Route path='/contact' component={Contact}  />
        <Route path='/portefolio/:id' component={ProjectPage}  />
        <Redirect to="/homePage" />
        </Switch>
        </div>
      
    </div>
   
     
    </Router>
  
  );
}
}

export default App;
