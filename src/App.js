import React, {useState} from 'react';
import Header from './layout/header';
import Body from './layout/body';
import Footer from './layout/footer';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ language, setLanguage ] = useState(true);
  const handleLanguage = () => {
    setLanguage(!language);
    console.log("pues hay va la cosa" + language);
  }
  return (
    <div className="App">
      {document.onload ?
        <div className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      :(
        <div>
        <Header handleLanguage={handleLanguage}/>
        <Body language={language}/>
        <Footer/>
        </div>
      )
      }
      
    </div>
  );
}

export default App;
