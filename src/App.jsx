import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import Market from "./static/Market";
import Padlet from "./static/Padlet";
import Bot from "./static/Bot";
import Index from "./Index";
import './index.css'

const App = () => (
  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element = {<Index/>}
          />
          <Route
            path="/market"
            element = {<Market />}
          />
          <Route
            path="/padlet"
            element = {<Padlet />}
          />
          <Route
            path="/bot"
            element = {<Bot />}
          />
        </Routes>
      </BrowserRouter>

);

export default App;
