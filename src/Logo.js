const Logo =({ image, content}) =>{


    return(
        <div>
            <a className="navbar-brand" href="/">
                <img src={image} alt="" />
            </a> 
            <p>{content}</p>  
        </div>
    )
 }
 export default Logo;