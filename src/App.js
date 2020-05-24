import React, {useState, useEffect} from 'react';
import Header from './layout/header';
import Body from './layout/body';
import Footer from './layout/footer';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ language, setLanguage ] = useState(true);
  const [ loading, setLoading ] = useState(true);
  const handleLanguage = () => {
    setLanguage(!language);
    console.log("pues hay va la cosa" + language);
  }
  const components = () => {
      return(
        <div className="App" visible={false}>

        <div>
          <Header handleLanguage={handleLanguage}/>
          <Body language={language}/>
          <Footer/>
        </div>
        </div>
      )
  }
  useEffect(() => {
    // Update the document title using the browser API
    // if(loading){setLoading(true);}
    window.onloadeddata = setLoading(false)
  });
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
