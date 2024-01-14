import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import { checkValidation } from "../../../utils/validate";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import Logo from "../../Logo";
import Signupform from "../signup/Signupform";

const Login = () => {
  const [authPage, setAuthPage] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

const toggleAuth = () => {
setAuthPage(!authPage)
}

  const handleClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if(message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/browse")
      })
      .catch((error) => {
        setErrorMessage("Email ID or password doesn't match");
      });
  };

  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      {authPage ? <div className="min-h-[100vh] w-screen relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="bg-black absolute h-[100vh] w-screen opacity-65"></div>
        <div className="relative py-6 px-10">
          <div onClick={goToHome}>
            <Logo />
          </div>
          <div className="bg-black w-[35%] mx-auto h-[80vh] rounded-lg px-[4.5vw] pt-[4vw] mb-4">
            <h1 className="text-white text-[2.5vw] font-semibold">Sign In</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                ref={email}
                required
                type="text"
                placeholder="Email"
                className="p-4 bg-zinc-800 w-[100%] my-6 rounded-lg focus:outline-none text-white"
              />
              <input
                ref={password}
                required
                type="Password"
                placeholder="Password"
                className="p-4 bg-zinc-800 w-[100%] rounded-lg focus:outline-none text-white"
              />
              <p className="text-red-600 pt-4">{errorMessage}</p>
              <button
                onClick={handleClick}
                className="p-4 bg-red-600 my-10 w-[100%] rounded-lg text-white"
              >
                Sign In
              </button>
            </form>
            <div className="flex items-center justify-between mt-[-2vw]">
              <div className="flex gap-2">
                <input type="checkbox" />
                <h5 className="text-[1.1vw] text-zinc-400">Remember me</h5>
              </div>
              <a
                href="/#"
                className="text-zinc-400  text-[1vw] hover:underline"
              >
                Need help?
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <h5 className="text-zinc-400">New to Netflix?</h5>
              <Link onClick={toggleAuth}  to="/auth" className="text-white hover:underline">
                Sign up now.
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div> : <Signupform/> }
    </>
  );
};

export default Login;
