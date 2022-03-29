import SocialIcon from "./SocialIcon";
import Logo from "./Logo";

const SocialBox =({icon, content, image}) =>{


    return(
        <div>
           
            <div className="col-12 col-sm-6 col-lg-3 res-margin">
            {/* Footer Items */}
            <div className="footer-items">
                {/* Logo */}
                <Logo content={content} image={image} />
                {/* Social Icons */}
                <SocialIcon icon={icon}/>
            </div>
        </div>
           
        </div>
    )
 }
 export default SocialBox;