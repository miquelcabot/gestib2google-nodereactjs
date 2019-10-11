import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import LogoutModal from './components/LogoutModal';
import Home from './pages/Home';
import UsuarisDomini from './pages/UsuarisDomini';

function App() {
  return (
    <div>
        <NavigationBar />
        <div class="content-wrapper">
            <div class="container-fluid">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/usuarisdomini' component={UsuarisDomini}/>
                </Switch>
            </div>
            <Footer />
        </div>
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fa fa-angle-up"></i>
        </a>
        <LogoutModal />
    </div>
  );
}

export default App;
