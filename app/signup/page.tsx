import Button from "../components/global/button/Button";
import FormGroup from "../components/global/form/FormGroup";
import "./sign-up.css";

export default function SignUp() {
    return (
      <main>
        <section className="sign-up">
            <div className="container">
                <div className="grid-container">
                    <h1>Create Account</h1>
                    <p>Already have an account? <a href="#">Sign in here.</a></p>
                    <form className="sign-up-form" action="">
                        <FormGroup title="First name" placeholder="Enter your first name" />
                        <FormGroup title="Last name" placeholder="Enter your last name" />
                        <FormGroup title="Email" placeholder="Enter your email" />
                        <FormGroup title="Password" placeholder="*****" />
                        <Button className="btn-theme" title="Sign Up" />
                    </form>
                </div>
            </div>
        </section>
      </main>
    );
  }