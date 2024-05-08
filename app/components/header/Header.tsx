import Link from "next/link";
import Image from "next/image";

import Button from "../global/button/Button";
import logo from "../../../public/images/logo-light.svg";

import "./header.css";

export default function Header() {
    return (
        <header>
        <div className="container">
            <Link href="/"><Image id="logo" src={logo} alt="" /></Link>
            <nav className="menu">
                    <ul>
                        <li><Link className="menu-link" href="">Overview</Link></li>
                        <li><Link className="menu-link" href="">Featues</Link></li>
                        <li><Link className="menu-link" href="/courses">Courses</Link></li>
                    </ul>
                </nav>
                <div className="account-buttons">
                    <Link href="/signin"><Button className="btn-theme" title="Sign In" /></Link>
                    <Link href="/signup"><Button className="btn-gray" title="Sign up" /></Link>
                </div>
            </div>
    </header>
    );
  }