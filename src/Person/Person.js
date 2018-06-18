import React, { Component } from 'react';

/*var person=function() 
{
    return <h1>hi </h1>
}*/

//es6
const person = (properties)=>
{
return(
<div> <p onClick={properties.click}>hello I am {properties.name} and I am  {Math.floor(Math.random()*30)} years old. I am from {properties.city}</p>
<p>{properties.children}</p>
</div>
)
}

export default person;