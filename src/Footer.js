
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
                            <li><a href="#s">Web design</a></li>
                            <li><a href="#s">Development</a></li>
                            <li><a href="#s">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#s">Company</a></li>
                            <li><a href="#s">Team</a></li>
                            <li><a href="#s">Careers</a></li>
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