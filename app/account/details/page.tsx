import AccountSideBar from "@/app/components/account/AccountSideBar";
import "./account-details.css";
import FormGroup from "@/app/components/global/form/FormGroup";
import Button from "@/app/components/global/button/Button";

export default function Details() {
    return (
        <main>
            <section className="account-details container">
                <AccountSideBar />
                <div className="details">
                    <h2>Account Details</h2>
                    <div>
                        <h5>Basic Info</h5>
                        <form className="basic-info">
                            <FormGroup title="First Name"/>
                            <FormGroup title="Last Name"/>
                            <FormGroup title="Email Address" />
                            <FormGroup title="Phone" />
                            <FormGroup title="Bio" textarea />
                            <div className="btn-holder">
                                <Button className="btn-gray" title="Cancel" />
                                <Button className="btn-theme" title="Save Changes" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <h5>Address</h5>
                        <form id="address" className="" action="">
                            <FormGroup title="Address line 1"/>
                            <FormGroup title="Address line 2 (optional)"/>
                            <FormGroup title="Postal code"/>
                            <FormGroup title="City"/>
                            <div className="btn-holder">
                                <Button className="btn-gray" title="Cancel" />
                                <Button className="btn-theme" title="Save Changes" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
  }