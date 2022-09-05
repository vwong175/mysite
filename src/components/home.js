import myImage from '../images/me.jpg';
import Button from '@mui/material/Button';
import * as Colors from '../theme/colors';
import * as Fonts from '../theme/fonts/fonts';
import './home.css';

function Image(){
    return(
        <div className="Image">
            <img src={myImage} className="myImage" alt="Image of Valerie Wong" />
        </div>
    )
}

const buttonStyling = {
    backgroundColor: "#343434",
    padding: "1em 1em 1em 1em",
    width: "215px",
    height: "45px",
}

const goToReachOut = () => {
    alert("clicked");
}

function QuickInfo(){
    return(
        <div className='Quick-Info'>
            <header> Valerie Wong </header>
            <p> Hello World! </p> 

            {/* TODO - Work on onClick function
            <Button
                style={buttonStyling}
                variant="contained"
                onClick={goToReachOut}
            >
                    Reach Out
            </Button> */}
        </div>
    );
}

function Home(){
    return (
      <div className="Home">
          <Image/>
          <QuickInfo/>
      </div>
    );
  }
  
  export default Home;