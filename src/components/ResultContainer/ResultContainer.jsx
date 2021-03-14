import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultContainer.css'

const ResultContainer = ({suggestedNames}) =>{
// console.log(suggestedNames)
    const names = suggestedNames.map(data =>{
        return <NameCard key={data} data={data} />
    })

    return (
        <div className="result-container">
            {names}            
        </div>
    )
}

export default ResultContainer