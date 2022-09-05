import myImage from '../images/me.jpg';
import * as Colors from '../theme/colors';
import * as Fonts from '../theme/fonts/fonts';
import './home.css';
import styled from 'styled-components';

function Image(){
    const imageStyles = {
        minWidth: "1.5em",
        minHeight: "50%",
        maxHeight: "50%",
        maxHeight: "50%",
    }
    return(
        <div className="Image">
            <img style={imageStyles} src={myImage} className="myImage" alt="Image of Valerie Wong" />
        </div>
    )
}

const Button = styled.button`
  background-color: Black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 0px;
  margin: 10px 0px;
  cursor: pointer;
`;

function QuickInfo(){
    return(
        <div className='Quick-Info' style={{backgroundColor:"blue"}}>
            <header style={{color: Colors.DarkGray, fontSize: 44, fontWeight: 'bold'}}> Valerie Wong </header>
            <p> Hello World! </p> 
            <Button variant="contained" style={{background: Colors.DarkGray, color: Colors.White}}> Reach out </Button>
        </div>
    );
}

function Home() {
    return (
      <div className="Home">
          <Image/>
          <QuickInfo/>
      </div>
    );
  }
  
  export default Home;