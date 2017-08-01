import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Results from './components/Results';

ReactDOM.render(

  <BrowserRouter>
      <Switch>
        <Route path="/Results" component={Results} />
        <Route exact path="/" component={App} />
      </Switch>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
