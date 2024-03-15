import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/AuthService";
import Input from "../ui/Input";
import AuthImageContainer from "../ui/AuthImageContainer";
import Button from "../ui/Button";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await signIn(email, password);
      navigate("/", { replace: true });
    } catch (error) {
      setErrorMsg("Email or Password Not Correct");
      setIsSubmitting(false);
      console.log("Firebase Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
      <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
        <div className="mb-14 flex-col items-center text-center">
          <h2 className="mb-2 text-3xl font-bold">Hello Again!</h2>
          <p className="text-slate-500">
            Welcome back! Please enter your detail.
          </p>
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        </div>
        <div className="flex w-full flex-col items-center">
          <form
            className="flex w-full max-w-sm flex-col"
            onSubmit={handleSubmit}
          >
            <Input
              labelText="Email"
              type="email"
              className="mb-3"
              setValue={setEmail}
            />

            <Input
              labelText="Password"
              type="password"
              className="mb-10"
              setValue={setPassword}
            />

            <Button
              text="Login"
              disabled={isSubmitting}
              className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
            />
          </form>
          <div className="mt-10 text-slate-500">
            Don&#39;t have an account yet?
            <Link to="/singUp" className="p-2 font-semibold text-violet-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <AuthImageContainer
        image="/images/login.webp"
        firstText="Shop Smarter,"
        secondText="Login Here"
      />
    </section>
  );
}

export default SignIn;
