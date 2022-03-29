const SocialIcon =({icon}) =>{


    return(
        <div>
            <div className="social-icons d-flex">
                {icon.map((icon) =>(
                <a class="facebook" href="#footer">
                    <svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewbox} data-fa-i2svg="">
                        <path fill="currentColor" d={icon.d}>
                        </path>
                        </svg>
                        <i class={icon.classname}></i>
                    <svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewbox} data-fa-i2svg="">
                        <path fill="currentColor" d={icon.d}>
                        </path>
                        </svg>
                        <i class={icon.classname}></i>
                </a>
                ))} 
            </div>
           
        </div>
    )
 }
 export default SocialIcon;