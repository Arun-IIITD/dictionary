import { useState } from "react";

function App() {

  const [words, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const theory =
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

const fetchResponse = () => {

  const searchword = words.toLowerCase();
  const found = theory.find(item => item.word.toLowerCase() === searchword)

  if (found){
    setDefinition(found.meaning)
  }

  else{
    setDefinition("Word not found in the dictionary")
  }

}







  return (
    <div className="App">

      <h1>Dictionary App</h1>

      <input 
      type = "text"
      placeholder="Search for a word"
      value = {words}
      onChange={(e) => setWord(e.target.value)}
      />

      <button
      type = "button"
      
      onClick={() => fetchResponse()}
      
      >
        Search
      </button>

      {definition && (
      <>
      <h3>Definition:</h3>

      <p>
        {definition}
      </p>
      </>
      
      )}









    </div>
  );
}

export default App;
