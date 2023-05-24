import React from "react";

const DynamicSelect = (props) => {
    let mas = []
    let str = ''
    const select = document.createElement('select')
    for (let i = 0; i < props.patients.length; i++) {
      mas.push(props.patients[i].name)
      
      str += `<option value = ${props.patients[i].name}> ${props.patients[1].name} </option>`
      select.innerHTML = str
      
      
    }
    
    
    console.log(select)
    return (
        <div>
          {str}
        </div>
    )
  }

  export default DynamicSelect