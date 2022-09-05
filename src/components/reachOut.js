import { OffWhite } from '../theme/colors';
import './reachOut.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const hoveredStyle = {
    cursor: 'pointer'
}

const openGithub = () => {
    window.open('https://github.com/vwong175', '_blank')
}

const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/valeriewong02/', '_blank')
}

function ReachOut(){
    return(
        <div className="Reach-Out">
            <header style={{color: OffWhite}}>Reach Out</header>
            
            <h2> Valerie Wong </h2>
            <p>vwong27@buffalo.edu</p>

            <p>
            Connect with me
            </p>

            {/* TODO - make onHover so that it is intuitive to click */}
            <GitHubIcon onClick={openGithub}/>
            <LinkedInIcon onClick={openLinkedIn}/>

        </div>
    )
}
  
export default ReachOut;