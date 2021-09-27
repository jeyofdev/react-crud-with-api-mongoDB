import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from '../create/Create';
import Home from '../home/Home';
import Update from '../update/Update';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users/create/" component={Create} />
                    <Route exact path="/users/update/:id" component={Update} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
