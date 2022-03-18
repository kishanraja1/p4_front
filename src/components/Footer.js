/////// Material UI \\\\\\\
//MUI Components
import { IconButton } from '@mui/material';

//MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer>
      <h3>Built by:</h3>
      <div className="engineers-footer-box">
        <div className="engineer" id="nathan">
          <h5>Nathan Freeman</h5>
          <div className="engineer-links-list">
            <a className="engineer-link" href="#" target="_blank" rel="noopener noreferrer"><GitHubIcon aria-label="GitHub Link" color="primary"/></a>
            <a className="engineer-link" href="#" target="_blank" rel="noopener noreferrer"><LinkedInIcon aria-label="LinkedIn Link"  color="primary"/></a>
            <a className="engineer-link" href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon aria-label="Instagram Link"  color="primary"/></a>
          </div>
        </div>
        <div className="engineer" id="nathan">
          <h5>V. Nieto Thrower</h5>
          <div className="engineer-links-list">
            <a className="engineer-link" href="https://github.com/nietovaca" target="_blank" rel="noopener noreferrer"><GitHubIcon aria-label="GitHub Link" color="secondary"/></a>
            <a className="engineer-link" href="https://www.linkedin.com/in/vthrower/" target="_blank" rel="noopener noreferrer"><LinkedInIcon aria-label="LinkedIn Link"  color="secondary"/></a>
            <a className="engineer-link" href="https://www.instagram.com/nietovaca/" target="_blank" rel="noopener noreferrer"><InstagramIcon aria-label="Instagram Link"  color="secondary"/></a>
          </div>
        </div>
        <div className="engineer" id="nathan">
          <h5>Kishan R.</h5>
          <div className="engineer-links-list">
            <a className="engineer-link" href="#" target="_blank" rel="noopener noreferrer"><GitHubIcon aria-label="GitHub Link" sx={{color: '#fc9842'}}/></a>
            <a className="engineer-link" href="#" target="_blank" rel="noopener noreferrer"><LinkedInIcon aria-label="LinkedIn Link" sx={{color: '#fc9842'}}/></a>
            <a className="engineer-link" href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon aria-label="Instagram Link" sx={{color: '#fc9842'}}/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
