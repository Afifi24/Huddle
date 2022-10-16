import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Styledfooter>
        <Container>
      <Hudle>
        <img src="./images/logo.svg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. At similique recusandae <br /> eaque, ex neque voluptates!</p>
        <div className="phone">
            <img src="./images/icon-phone.svg" alt="" />
            <h4>Phone: +212614350974</h4>
        </div>
        <div className="email">
            <img src="./images/icon-email.svg" alt="" />
            <h4>firstname@gmail.com </h4>
            
        </div>
      </Hudle>
      <Newsletter>
        <h3>Newsletter</h3>
        <p>To receive tips onhow to grow your commmunity, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</p>
        <div className="form">
            <input type="text" />
            <button>Subscribe</button>
        </div>
        {/* <Deployed>
        <p>&copy; 2022 Afifi Ibrahim <br />Developed and Deployed by Me</p>
       
      </Deployed> */}
      </Newsletter>
      
      </Container>
    </Styledfooter>
  )
}
// styled components

const Styledfooter = styled.div`
background-color: #234;
padding: 2rem;
color: #fff;
`
const Container = styled.div`
width: 80%;
margin: auto;
display: grid;
column-gap: 14rem;
grid-template-areas:
 "hudle newsletter";
@media(max-width:922px){
    grid-template-areas:
    "newsletter"
    "hudle"
    ;
    align-items: center;
    justify-content: center;
}
`
const Hudle = styled.div`
display: grid;
grid-area: 'hudle';
img{
    width: 10rem;
}
p{
    font-size:13px;
}
div{
    display: flex;
    align-items: center;
    /* margin-bottom: -5rem; */
    img{
        width: 1rem;
        height: 1rem;
        object-fit: cover;
        margin-right:2rem;
    }
    h4{
       font-weight: normal;
       font-size: 13px;
    }
}
@media(max-width:922px){
    margin-bottom: 3rem;
}
`
const Newsletter = styled.div`
display: grid;
grid-area: 'newsletter';
p{
    font-size: 13px;
}
input{
    height: 28px;
    width: 15rem;
    border: none;
    border-radius: 4px;
    padding: 0px 7px;
    font-size: 12px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);

}
button{
    margin-left: 1rem;
    width: 8rem;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: #ff0099;
    color:#fff;
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    &:hover{
        transform: scale(0.98);
        box-shadow: 1px 1px 10px rgba(0,0,0,0.3);
    }
}
div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap;
    margin-bottom: 1rem;
}
@media(max-width:922px){
    div{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input{
            margin-bottom: 1rem;
        }
        button{
            margin-bottom: 3rem;
        }
    
    }

}
`
// const Deployed = styled.div`

// display: flex;
// flex-direction: column;
// align-items: center;
// text-align: center;
// p{
//     font-size:12px;
// }
// @media(min-width:922px){
  
// }
// `