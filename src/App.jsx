import './App.css'
import React, { useState, useMemo } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';
import ThemeContext from '../../context/src/context';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    //DICA: Função que troca um idioma por outro (ao clicar no botão)
    
    setLanguage((currentLanguage) => {
      const languageMap = {
        [languages.english.id]: languages.portuguese,
        [languages.portuguese.id]: languages.spanish,
        [languages.spanish.id]: languages.english,
      };

      return languageMap[currentLanguage.id] || languages.english;
    });
  }

  const providerValue = useMemo(() => ({
    language,
    handleChangeLA
  }), [language, handleChangeLA])



  return (
    <div className="App">
      <LanguageContext.Provider value={providerValue}>{/*  DICA: Adicione o provider LanguageContext */}
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  )
}

export default App