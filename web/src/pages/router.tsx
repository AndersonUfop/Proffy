import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/landing" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;