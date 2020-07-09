import React, {useState, useEffect} from 'react';
import Header from './layout/header';
import Body from './layout/body';
import Footer from './layout/footer';
import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './layout/context/GlobalContext';

function App() {
  const [ loading, setLoading ] = useState(true);
  const components = () => {
      return(
        <div className="App">
          <GlobalProvider>
            <Header/>
            <Body/>
            <Footer/>
          </GlobalProvider>
        </div>
      )
  }
  useEffect(() => {
    window.onloadeddata = setLoading(false)
  }, []);
  const load = () => {
    return (
      <div className="App">
        <div className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }

  const app = () => {
    if(loading) { return(load()) } else { return(components())}
  }
  return (
    app()
  );
}

export default App;
