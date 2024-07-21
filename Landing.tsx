import '../styles/Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <section>
            <header>
                <h2><a href="#" className="logo">Health Booth</a></h2>
                <div className="navigation">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Register</Link>
                </div>
            </header>
            <div className="content">
                <div className="info">
                    <h2>Trade plastic <br /><span>Embrace Health</span></h2>
                    <p>
                        Access to affordable and convenient healthcare is a significant
                        challenge in Namibia, especially in remote and underserved
                        areas.
                    </p>
                    <Link to="/chatbot">Chat Now</Link>
                </div>
            </div>
            <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>             
            </div>
        </section>

    )
}

export default Landing;