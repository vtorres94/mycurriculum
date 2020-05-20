import React, {useState} from 'react';
import Header from './layout/header';
import Body from './layout/body';
import Footer from './layout/footer';
import './App.css';

function App() {
  const [ language, setLanguage ] = useState(true);
  const handleLanguage = () => {
    setLanguage(!language);
    console.log("pues hay va la cosa" + language);
  }
  return (
    <div className="App">
      <Header handleLanguage={handleLanguage}/>
      <Body language={language}/>
      <Footer/>
    </div>
  );
}

export default App;
