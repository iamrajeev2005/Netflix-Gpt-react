import { useNavigate } from "react-router-dom";
import Logo from "../../Logo";

const Signupheader = () => {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate("/auth");
  };

  return (
    <div className="relative z-[1] flex items-start justify-between px-[12vw] py-[1.5vw]">
      <Logo/>
      <section className=" flex items-center justify-between gap-[20px]">
        <select className=" bg-transparent border-1 border-white border px-[1.5vw] py-[.2vw] text-white rounded-md focus:outline-none">
          <option className="text-black" value="en-IN" lang="en">
            English
          </option>
          <option className="text-black" value="hi-IN" lang="hi">
            Hindi
          </option>
        </select>
        <button
          className="bg-red-600 text-white px-[1.2vw] py-[.3vw] rounded-md"
          onClick={goToSignIn}
        >
          Sign In
        </button>
      </section>
    </div>
  );
};

export default Signupheader;
