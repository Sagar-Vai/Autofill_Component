import React,{useState} from 'react'
import AutoComplete from '../AutoComplete'
import './style.css'
// props pass from dataFIel to autocomplete then state mantained userinput then we use functoin onchange then state will change accoring to input
function DataFile() {
    const[text,setText] = useState("");
    return (
        <div>
           <div className='dataFile'>
           <h1>     React AutoComplete Demo</h1>
            <h2>Start typing and experience React AutoComplete</h2>
           </div>
            <AutoComplete suggestions ={[
                "Alligator",
                "Bask",
                "Crocodilian",
                "Death Roll",
                "Eggs",
                "Jaws",
                "Reptile",
                "Solitary",
                "Tail",
                "Wetlands",
                "Basket"
            ]}text = {text}setText={setText}/>
        </div>
    )
}

export default DataFile
