import './App.scss'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products}/>
        <Route exact path="/detail/:id" component={Product} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
