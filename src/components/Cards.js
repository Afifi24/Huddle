import React from 'react'
import styled from 'styled-components'
export default function Cards({title,body,id,image}) {
  return (
    <Styledcards layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </Styledcards>
  )
}


// styled components
const Styledcards = styled.div`
display: flex;
align-items: center;
margin:2rem 0rem;
padding: 1rem 2rem;
box-shadow:  1px 1px 10px rgba(0,0,0,0.1);
border-radius: 20px;
flex-direction: row;
img{
    width: 25rem;
}
p{
    opacity: 0.5;
}
@media(max-width:922px){
   flex-direction: column;
   img{
    width: 18rem;
   }
   p{
    font-size: 14px;
    opacity: 0.5;
   }
}
`