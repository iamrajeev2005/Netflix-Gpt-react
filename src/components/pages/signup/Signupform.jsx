import React, { useRef, useState } from "react";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { checkValidation } from "../../../utils/validate";
import Logo from "../../Logo";

const Signupform = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
    if (message) return;

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        setsuccessMessage("Successfully Sign Up ! Go to Sign In Page"); 
      })
      .catch((error) => {
        setErrorMessage("Already a user. Try Sign In")
      });
  };
  return (
    <>
      <div className="h-screen w-screen bg-white">
        <div className="flex items-center justify-between py-5 px-10 border-b-2 border-zinc-200 h-60px">
          <div onClick={goToHome}>
            <Logo />
          </div>
          <a className="text-[2vw] hover:underline" href="/auth">
            Sign In
          </a>
        </div>
        <div className="flex items-center justify-center mx-auto mt-[4vw] mb-[6vw]">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <h2 className="text-[2.5vw] font-semibold text-zinc-800 leading-tight overflow-hidden mb-[1.4vw]">
              Create a account to start <br />
              your membership
            </h2>
            <p className="text-[1.5vw] font-normal leading-tight overflow-hidden">
              Just a few more steps and you're done! <br />
              We hate paperwork, too.
            </p>
            <input
              required
              type="text"
              placeholder="Username"
              className="p-3 my-4 border-zinc-800 border"
            />
            <input
              ref={email}
              required
              type="text"
              placeholder="Email"
              className="p-3 mb-4 border-zinc-800 border"
            />
            <input
              ref={password}
              required
              type="password"
              placeholder="Add a password"
              className="p-3 border-zinc-800 border"
            />
            <p className="text-red-600">{errorMessage}</p>
            <p className="text-green-600 font-bold text-center">
              {successMessage}
            </p>
            <button
              onClick={handleClick}
              className="bg-red-600 my-4 text-white h-[60px] text-[2vw] rounded-md"
            >
              Sign Up
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signupform;
