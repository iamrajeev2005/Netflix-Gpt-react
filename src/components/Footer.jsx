import React, { useEffect } from 'react'
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const Footer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/auth")
      }
    });
    return () => unsubscribe();
  }, [dispatch,navigate]);
  return (
    <>
      <div className="bg-black w-screen h-[60vh] text-slate-200 py-[2.5vw] px-[10vw]">
        <h5>
          Questions? Call{" "}
          <a href="/#" className="underline">
            000-800-919-1694
          </a>
        </h5>
        <div className="flex gap-[10vw] items-center underline py-10 text-[1vw]">
          <div className="flex flex-col gap-3">
            <a href="/#">FAQ</a>
            <a href="/#">Investor Relations</a>
            <a href="/#">Privacy</a>
            <a href="/#">Speed Test</a>
          </div>
          <div className="flex flex-col gap-3 ">
            <a href="/#">Help Centre</a>
            <a href="/#">Jobs</a>
            <a href="/#">Cookie Preferences</a>
            <a href="/#">Legal Notices</a>
          </div>
          <div className="flex flex-col gap-3 ">
            <a href="/#">Account</a>
            <a href="/#">Ways to Watch</a>
            <a href="/#">Corporate Information</a>
            <a href="/#">Only on Netflix</a>
          </div>
          <div className="flex flex-col gap-3 ">
            <a href="/#">Media Centre</a>
            <a href="/#">Terms of Use</a>
            <a href="/#">Contact Us</a>
          </div>
        </div>
        <select className=" bg-transparent border-1 border-white border px-[1.5vw] py-[.2vw] text-white rounded-md focus:outline-none">
          <option className="text-black" value="en-IN" lang="en">
            English
          </option>
          <option className="text-black" value="hi-IN" lang="hi">
            Hindi
          </option>
        </select>
        <h5 className="text-slate-200 text-[1vw] py-6">Netflix India</h5>
      </div>
    </>
  );
}

export default Footer