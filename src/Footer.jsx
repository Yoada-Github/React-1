function Footer(){
    return(
        <footer className="footer">
            <div>
                <h4>Features</h4>
                <nav>
                   <ul>
                      <li><a href="#">Cool Stuff</a></li>
                      <li><a href="#">Random Feature</a></li>
                      <li><a href="#">Team Feature</a></li>
                    </ul>
                </nav>            
            </div>
            <div>
                <h4>Resources</h4>
                <nav>
                   <ul>
                      <li><a href="#">Resource</a></li>
                      <li><a href="#">Resource name</a></li>
                    </ul>
                </nav>   
            </div>
            <div>
                <h4>About</h4>
                <nav>
                   <ul>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Locations</a></li>
                    </ul>
                </nav> 
            </div>
        </footer>
    );
}

export default Footer