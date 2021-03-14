import React from 'react'
import './SearchBox.css'

const SearchBox = ({handleInputChange}) =>{
    // const [inputText, setInputText] = useState("")
    // console.log(inputText)
    return(
        <div className="search-container">
            <input 
            onChange={(e) => handleInputChange(e.target.value)} 
            placeholder="Type Keywords" className="search-input" />
        </div>
    )
}
export default SearchBox