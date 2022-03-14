import React from 'react';

const styleCss = {
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
  };

const userInput = (props) =>{
    return(<div>
              <hr />
              <input style={styleCss} type='text' onChange= {props.changed} value= {props.currentUsername}/>
            </div>
        )
}

export default userInput;