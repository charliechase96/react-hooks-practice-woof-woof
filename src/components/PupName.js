import React from "react";

function PupName({pup, onPupClick}) {
    return (
        <span 
            onClick={() => onPupClick(pup)} 
            key={pup.id} 
        >
            {pup.name}
        </span>
    )
}

export default PupName;