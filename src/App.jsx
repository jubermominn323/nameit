import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ResultContainer from './components/ResultContainer/ResultContainer';
import SearchBox from './components/SearchBox/SearchBox';

const name = require('@rstacruz/startup-name-generator')

function App() {
  const [headTitle] = useState("Name It!")
  const [headerExpanded, setHeaderExpanded] = useState(true)
  const[suggestedNames, setSuggestedNames] = useState([])

  const handleInputChange = (inputText) =>{
    
    setHeaderExpanded(!inputText)
    inputText ? setSuggestedNames(name(inputText)) : setSuggestedNames([])
  }
  // console.log(name('cloud'))
  return (
    <div className="App">
      <Header 
        headTitle={headTitle}
        headerExpanded={headerExpanded} />
      <SearchBox handleInputChange={handleInputChange}/>
      <ResultContainer suggestedNames={suggestedNames}/>
    </div>
  );
}

export default App;
