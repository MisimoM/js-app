import Link from "next/link";
import Button from "../components/global/button/Button";
import FormGroup from "../components/global/form/FormGroup";
import "./sign-in.css";

export default function SignIn() {
    return (
      <main>
        <section className="sign-in">
        <div className="container">
            <div className="grid-container">
                <div>
                    <h1>Welcome Back</h1>
                    <p>Don't have an account yet? <Link href="signup">Sign up here.</Link></p>
                </div>
                <form className="sign-in-form" action="">
                    <FormGroup title="Email" placeholder="Enter your email" />
                    <FormGroup title="Password" placeholder="*****" />
                    <Button className="btn-theme" title="Sign in" />
                    <Link href="/">Forgot your password?</Link>
                </form>
            </div>
        </div>
    </section>
      </main>
    );
  }