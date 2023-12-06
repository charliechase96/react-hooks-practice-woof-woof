import React from "react";
import PupName from './PupName';

function PupList({pups, onPupClick}) {
    return (
        pups.map(pup => (
            <PupName key={pup.id} pup={pup} onPupClick={onPupClick} />
        ))
    )
}

export default PupList;