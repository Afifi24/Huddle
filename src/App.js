
import Header from "./components/Header";
import Cards from "./components/Cards";
import content from './content'
import styled from "styled-components";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
    <Header/>
    <Container>
      {content.map((item)=>(
        <Cards 
        title = {item.title}
        body ={item.body}
        image ={item.image}
        id = {item.id}
        key={item.id}
        />
      ))}
    </Container>
    <Footer/>
    </div>
  );
}

export default App;


// styled components
const Container = styled.div`
width: 80%;
margin: auto;
`