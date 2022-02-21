import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container.js';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import FooterContainer from './footer/footer_container';
import MainPageContainer from './main/main_page_container';

const App = () => (
  <div>
    <NavBarContainer />
    <FooterContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPageContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path ="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path ="/feed" component={FeedContainer} />
        <ProtectedRoute exact path ="/profile/:id" component={ProfileContainer} />
    </Switch>
   
  </div>
);

export default App;