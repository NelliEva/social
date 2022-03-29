const FooterItem =({item, title}) =>{


    return(
        <div>
            {item.map((item) =>(
            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                             {/* Footer Items */}
                             <div className="footer-items">
                                 {/* Footer Title */}
                                 <h4 className="footer-title">{title}</h4>
                                 <ul>
                                     <li>{item.name}</li>
                                 </ul>
                             </div>
             </div>
            ))}
        </div>
    )
 }
 export default FooterItem;