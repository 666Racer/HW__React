import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main/Main';


function App() {
  return (
    <div classNameName="App">
      <Router>
       <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          {/* <Route path='/checkout' element={<Checkout />} />
          <Route path='/singlePage' element={<SinglePage />} />
          <Route path='/basket' element={<Basket/>} />
          <Route path='/products' element={<Products  />} /> */}
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
