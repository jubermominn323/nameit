import React from 'react'
import './NameCard.css'

const nameUrl = 'https://www.namecheap.com/domains/registration/results/?domain='
const NameCard = ({data}) =>{
    return (
        <a
        target = "_blank" 
        className='card-link' href={`${nameUrl}${data}`}>
            <div className='result-name-card'>
            <p className='result-name'>{data}</p>
        </div>
        </a>
    )
}
export default NameCard