const SubscribeForm =({title, item}) =>{


    return(
        <div>
            {item.map((item) =>(
                <div className="col-12 col-sm-6 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                    {/* Footer Title */}
                    <h4 className="footer-title">{title}</h4>
                    {/* Subscribe Form */}
                    <div className="subscribe-form d-flex align-items-center">
                        <input type="email" className="form-control" placeholder="info@yourmail.com" />
                        <button type={item.type} className="btn"><i className="icon-paper-plane" /></button>
                    </div>
                </div>
            </div>
           ))}  
        </div>
    )
 }
 export default SubscribeForm;