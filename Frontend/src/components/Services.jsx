import React from 'react'
import { GoContainer } from 'react-icons/go'

const services = () => {
  const services=[
    {
      id:1,
      url:"/birthday.jpg",
      title:"Birthday planning"
    },
    {
      id:2,
      url:"/gamenight.jpg",
      title:"Gamenight planners"
    },
    {
      id:3,
      url:"/anniversary.jpg",
      title:"Anniversary planning"
    },
    {
      id:4,
      url:"/wedding.jpg",
      title:"Wedding Planning"
    },
    {
      id:5,
      url:"/party.jpg",
      title:"Party Planners"
    },
    {
      id:6,
      url:"/camping.jpg",
      title:"Campign planners"
    },
    
  ]
return(
  <div className="services container">
<h1>OUR SERVICES</h1>
<div className="banner">
  {services.map((element)=>{
    return(
      
      <div className="item"key={element.id}>
        <h3>{element.title}</h3>
        <img src={element.url} alt={element.title}/>
      </div>
    );
  })}
</div>
  </div>
)

}

export default services