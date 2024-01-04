/* eslint-disable no-unused-vars */


// Understanding Cut Copy Paste in React JS


import React from 'react';

function Copy() {

    const copytext = ()=>{
alert("Text Copied !"); 
    }

    const cutText = ()=>{
        alert("Text Cut !"); 
            }


 const pasteText = ()=>{
         alert("Text Pasted Succesfully !"); 
         }
       
    const FocusText = ()=>{
        console.log("Text Fucus !"); 
            }
  
            const BlurText = ()=>{
                console.log("Text Blur !"); 
                    }
          
  return (
    <>

<p onCopy={copytext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti assumenda est, architecto unde aliquid quidem consequatur. Minima magnam voluptatum saepe quod, temporibus quam doloribus iusto, perspiciatis soluta cumque quisquam consectetur quia veritatis corrupti ab consequuntur nihil alias ex molestias pariatur, vero quae architecto omnis? Nostrum vel eius sed est, architecto velit ratione. Eveniet quaerat quo recusandae magni</p>

<p onCut={cutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti assumenda est, architecto unde </p>

<input type="text" onPaste={pasteText} />

<input type="text" onFocus={FocusText} />
<input type="text" onBlur={BlurText} />




    </>
  )
}

export default Copy