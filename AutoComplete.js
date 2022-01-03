import React,{useEffect} from 'react'
import './Component/style.css'

function AutoComplete(props) {
    console.log(props);
    const handleInput=(e)=>{
        
      props.setText(e.target.value);
      
    }
     useEffect (() => {
         if(props.text == ""){
            let box2 = document.querySelectorAll('.suggestword>li');
         
            if(box2 != null){
            box2.forEach((val)=>{
                val.remove();
            })
            }
             return;
         }
         let box1 = document.querySelectorAll('.suggestword>li');
         if(box1 != null){
            box1.forEach((val)=>{
                val.remove();
            })
            
         }
         
        let arr = props.suggestions.filter(value=>{ 
            return value.toLowerCase().includes(props.text);
        })
        if(arr.length == 0){
            let box = document.querySelector('.suggestword');
            let li = document.createElement('li');
            li.innerText = 'We have no suggestion'
            box.appendChild(li);
        }
        // console.log(arr.length)
        arr.map(value=>{  
            let box = document.querySelector('.suggestword');
            let li = document.createElement('li');
            li.setAttribute('className','list')
            li.innerText = value;
            box.appendChild(li);
            
        })
        
        let box2 = document.querySelectorAll('.suggestword>li');
        if(box2 != null){
             for(let i = 0; i < box2.length; i++){
                box2[i].addEventListener('click',function(e){
                  let val = box2[i].innerHTML;
                  let input = document.querySelector('.mainBox input')
                  input.value = val;
                   for(let i = 0; i < box2.length; i++)
                           box2[i].remove();
                }) 
             }
            
         }
    }, [props.text])
    return (
        <div className='mainBox'>
            <input  type = 'text' onChange={e=>{handleInput(e)}}></input>
            <div className='suggestword'>
                
            </div>
        </div>
    )
}

export default AutoComplete
