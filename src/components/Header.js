import React from 'react'
import styled from 'styled-components'
export default function Header() {
  return (
    <Styledheader>
      <Container>
        <Nav>
        <img src='./images/logo.svg' alt='' />

            <button>Try It Free</button>
        </Nav>
        <Flex>
            <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p> Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.</p>
              <button>Get Started For Free</button>
            </div>
            <div>
          <img src='./images/illustration-mockups.svg' alt='' />

            </div>
        </Flex>
      </Container>
    </Styledheader>
  )
}

// styled components

const Styledheader = styled.div`
min-height: 75vh;
/* background-color: lightblue; */
padding: 2rem 1rem;

`
const Container = styled.div`
width: 80%;
margin: auto;
`
const Nav = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
 button{
    width: 10rem;
    border: 1px solid #ff0099;
    border-radius: 23px;
    height: 40px;
    background-color: transparent;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.3);
    font-weight: bold;
    cursor: pointer;
    color: #ff0099;
    &:hover{
    transform: scale(0.98);
    background-color: #ff0099;
    color: #fff;
    transition: all 0.4s ease-in;

    }
}
 margin-bottom: 3rem;
 @media(max-width:922px){
    flex-direction: column;
    img{
        margin-bottom: 2rem;
    }
 }
`
const Flex = styled.div`

display: flex;
div{
    p{
        margin-bottom: 4rem;
        font-weight: normal;
    }
button{
    width: 14rem;
    height: 45px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: #ff0099;
    color:#fff;
    font-weight: bold;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.3);

    &:hover{
        transform: scale(0.98);
    }
}
}
img{
    max-width: 25rem;
}
@media(max-width:922px){
    flex-direction: column;
    align-items: center;
   
div{
    h1{
        font-size: 1.8rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    p{
        margin-bottom: 2rem;
        font-size: 14px;
    }
    button{
        margin-bottom: 3rem;
    }
}
img{
    width: 20rem;
}
}
`