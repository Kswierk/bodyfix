import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './components/globalStyles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Start from './components/views/start/Start';
import Excercises from './components/views/excercises/Excercises';
import BackText from './components/views/back/Back';
import Legs from './components/views/legs/Legs';
import Neck from './components/views/Neck/Neck';
import Breath from './components/views/breathe/Breath';
import Draw from './components/views/Draw';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/excercises" exact component={Excercises} />
        <Route path="/back" exact component={BackText} />
        <Route path="/legs" exact component={Legs} />
        <Route path="/neck" exact component={Neck} />
        <Route path="/breathe" exact component={Breath} />
        <Route path="/daily" exact component={Draw} />
      </Switch>
    </Router>
  );
}

export default App;
