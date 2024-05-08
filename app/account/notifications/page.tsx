import AccountSideBar from "@/app/components/account/AccountSideBar";
import FormGroup from "@/app/components/global/form/FormGroup";
import Button from "@/app/components/global/button/Button";
import "./account-notifications.css";
import CheckBoxGroup from "@/app/components/global/form/CheckBoxGroup";

export default function Notifications() {
    return (
      <main>
        <section className="account-notifications container">
          <AccountSideBar />
          <div className="notifications">
            <h2>Notifications</h2>
            <form className="notification-form">
              <FormGroup title="Preferred email for notifications" />
              <CheckBoxGroup title="Subscribe to newsletter" text="Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper." />
              <CheckBoxGroup title="Use Dark Mode Theme in Application" text="Tortor massa porttitor enim tristique neque fermentum sed." />
              <div className="btn-holder">
                <Button className="btn-gray" title="Cancel" />
                <Button className="btn-theme" title="Save Changes" />
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }