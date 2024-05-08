import Link from "next/link";
import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="social-media">
                    <Link href="#" className="btn-social"><i className="fa-brands fa-facebook"></i></Link>
                    <Link href="#" className="btn-social"><i className="fa-brands fa-square-x-twitter"></i></Link>
                    <Link href="#" className="btn-social"><i className="fa-brands fa-instagram"></i></Link>
                    <Link href="#" className="btn-social"><i className="fa-brands fa-youtube"></i></Link>
                </div>
                <p>© 2024 Silicon. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
            </div>
        </footer>
    );
  }
