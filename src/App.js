import React from 'react';
import './css/main.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Profile from './component/Content/Profile/Profile';
import Footer from './component/Footer/Footer';
import {Route} from "react-router-dom";
import News from "./component/Content/News/News";
import Music from "./component/Content/Music/Music";
import Setting from "./component/Content/Setting/Setting";
import DialogsContainer from "./component/Content/Dialogs/DialogsContainer";
import FriendsContainer from "./component/Content/Friend/FriendPageContainer";
import NavContainer from "./component/Nav/NavContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavContainer/>
            <div className='content'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/messages'
                       render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>

            </div>
            <Footer/>
        </div>
    );
}

export default App;
