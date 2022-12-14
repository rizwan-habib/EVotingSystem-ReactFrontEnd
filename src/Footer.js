
import "./css/Footer-Basic.css";
import "./css/Footer-Dark.css";
import "./fonts/ionicons.min.css";

function Footer(props) {

    return (

        <footer class="footer-dark">
            <div class="intro">
                <h2 class="text-center">Contact us</h2>
                <br /><br /><br />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    

                    <div class="col item social"><a href="https://github.com/rizwan-habib"><i class="icon ion-social-github"></i></a><a href="https://www.instagram.com/_imrizwan/"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2022</p>
            </div>
        </footer>

    );
}

export default Footer;