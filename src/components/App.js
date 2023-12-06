import React, { useState, useEffect } from "react";
import PupList from './PupList';
import PupProfile from "./PupProfile";

function App() {
  const [pups, setPups] = useState([]);
  const [selectedPup, setSelectedPup] = useState(null);
  const [filterGoodDogs, setFilterGoodDogs] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(response => response.json())
    .then(data => setPups(data))
  }, []);

  function handlePupClick(pup) {
    setSelectedPup(pup);
  };

  function handleUpdate(updatedPup) {
    setPups(pups.map(pup => pup.id === updatedPup.id ? updatedPup : pup));
    setSelectedPup(updatedPup);
  }

  function toggleGoodDogFilter() {
    setFilterGoodDogs(!filterGoodDogs);
  };

  const filteredPups = filterGoodDogs ? pups.filter(pup => pup.isGoodDog) : pups;

  return (
    <div className="App">
      <div id="filter-div">
        <button 
          onClick={toggleGoodDogFilter} 
          id="good-dog-filter">
            Filter good dogs: {filterGoodDogs ? "ON" : "OFF"}
        </button>
      </div>
      <div id="dog-bar">
        <PupList pups={filteredPups} onPupClick={handlePupClick} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <PupProfile pup={selectedPup} onUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
}

export default App;
