import Link from "next/link";
import "./accountSideBar.css";

export default function AccountSideBar() {
    return (
        <aside className="account-bar">
            <div className="container">
                <div className="profile-container">
                    <div className="profile">
                        <img src="images/profile-image.png" alt="" />
                        <h5>FirstName LastName</h5>
                        <p>firstname.lastname@email.com</p>
                    </div>
                    <div className="nav-holder">
                        <Link href="details">Account details</Link>
                        <Link href="notifications">Notifications</Link>
                        <Link href="#">Sign out</Link>
                    </div>
                </div>
            </div>
        </aside>
    );
  }