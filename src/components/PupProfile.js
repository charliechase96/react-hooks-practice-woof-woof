import React, { useEffect } from "react";
import { useState } from "react";

function PupProfile({pup, onUpdate}) {
    const [isGoodDog, setIsGoodDog] = useState(
        pup ? pup.isGoodDog : false);

    useEffect(() => {
        setIsGoodDog(pup ? pup.isGoodDog : false);
    }, [pup]);

    if (!pup) {
        return null;
    }

    function handleGoodorBad() {
        const updatedIsGoodDog = !isGoodDog;
        setIsGoodDog(updatedIsGoodDog);

        fetch(`http://localhost:3001/pups/${pup.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isGoodDog: updatedIsGoodDog }),
        })
        .then(response => response.json())
        .then(updatedPup => {
            onUpdate(updatedPup);
        });
    };

    return (
        <>
            <img src={pup.image} alt={pup.name} />
            <h2>{pup.name}</h2>
            <button onClick={handleGoodorBad} >{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </>
        
    )
}

export default PupProfile;