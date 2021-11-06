import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import PokeCreate from './components/PokeCreate'
import Detail from './components/Detail'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/pokemon" component={PokeCreate} />
                    <Route exact path="/home/:id" component={Detail} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
