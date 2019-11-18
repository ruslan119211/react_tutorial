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
import Friends from "./component/Content/Friend/FriendPage";
import DialogsContainer from "./component/Content/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav friend={props.state.friendsItem.friends}/>
            <div className='content'>
                <Route path='/profile' render={() => <Profile store={props.store}/>}
                />
                <Route path='/messages'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/friends' render={() => <Friends friend={props.state.friendsItem.friends}/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
