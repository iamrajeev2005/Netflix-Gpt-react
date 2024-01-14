import Signupheader from "./pages/signup/Signupheader";
import accordiandata from "../utils/accordiandata";
import Accordian from "./Accordian";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/auth");
  };
  return (
    <>
      <div className="h-screen w-screen relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="bg-black absolute h-screen w-screen opacity-65"></div>
        <Signupheader />
        <div className="relative z-1">
          <h1 className="text-white  text-[3.7vw] font-bold px-[12vw] text-center pt-[3.5vw] leading-tight">
            Enjoy big movies, hit series and more from ₹149.
          </h1>
          <h3 className="text-white  text-[1.8vw] text-center leading-tight font-medium pt-[1vw]">
            Join today. Cancel anytime.
          </h3>
          <h5 className="text-white  text-[1.6vw] text-center leading-tight font-normal pt-[2vw]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <div className=" flex items-center justify-center mt-[1vw] gap-[20px]">
            <button
              onClick={goToSignUp}
              className=" bg-red-600 text-white px-[1.2vw] py-[.8vw] rounded-md text-[2vw] w-[400px] "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen h-2 bg-zinc-600"></div>
      <div className="w-screen h-[80vh] bg-black flex justify-between items-center text-white px-[10vw]">
        <div className="w-[50%]">
          <h1 className="font-bold text-[3vw] py-[1vw]">Enjoy on your TV</h1>
          <h4 className="font-semibold text-[1.7vw] leading-tight overflow-hidden w-[85%]">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h4>
        </div>
        <div className="w-[50%] relative ">
          <img
            className="h-[100%] w-[100%] object-cover relative z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video
            className="absolute top-[8%] left-[13.4%] h-[80%] w-[72.4%] -z-1"
            autoPlay
            muted
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          ></video>
        </div>
      </div>
      <div className="w-screen h-2 bg-zinc-600"></div>
      <div className="w-screen h-[80vh] bg-black flex justify-between items-center text-white px-[10vw]">
        <div className="w-[50%] relative ">
          <img
            className="h-[90%] w-[90%] object-cover relative z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
          <div className="bg-black h-[110px] w-[300px] border-2 border-slate-400 rounded-lg flex items-center justify-between absolute bottom-[10%] left-[17%] z-20 px-2">
            <img
              className="h-[90px] w-[70px]"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
            />
            <div className="">
              <h3>Stranger Things</h3>
              <h3 className="text-blue">Downloading...</h3>
            </div>
            <div className="h-[50px] w-[50px] bg-no-repeat bg-cover bg-[url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif')]"></div>
          </div>
        </div>
        <div className="w-[50%]">
          <h1 className="font-bold text-[3.2vw] py-[1vw] leading-tight w-[80%]">
            Download your shows to watch offline
          </h1>
          <h4 className="font-semibold text-[1.7vw] leading-tight overflow-hidden w-[85%]">
            Save your favourites easily and always have something to watch.
          </h4>
        </div>
      </div>
      <div className="w-screen h-2 bg-zinc-600"></div>
      <div className="w-screen h-[80vh] bg-black flex justify-between items-center text-white px-[10vw]">
        <div className="w-[50%]">
          <h1 className="font-bold text-[3vw] py-[1vw]">Watch everywhere</h1>
          <h4 className="font-semibold text-[1.7vw] leading-tight overflow-hidden w-[85%]">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h4>
        </div>
        <div className="w-[50%] relative ">
          <img
            className="h-[100%] w-[100%] object-cover relative z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt=""
          />
          <video
            className="absolute top-[2%] left-[17%] h-[70%] w-[65%] -z-1"
            autoPlay
            muted
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
          ></video>
        </div>
      </div>
      <div className="w-screen h-2 bg-zinc-600"></div>
      <div className="w-screen h-[80vh] bg-black flex justify-between items-center text-white px-[10vw]">
        <div className="w-[50%] relative ">
          <img
            className="h-[90%] w-[90%] object-cover relative z-10"
            src="https://occ-0-6049-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <h1 className="font-bold text-[3.2vw] py-[1vw] leading-tight w-[80%]">
            Create profiles for kids
          </h1>
          <h4 className="font-semibold text-[1.7vw] leading-tight overflow-hidden w-[85%]">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h4>
        </div>
      </div>
      <div className="w-screen h-2 bg-zinc-600"></div>
      <div className="min-h-[100vh] w-[100vw] bg-black">
        <h1 className="text-center text-white text-[5vw] font-semibold mt-[3vw]">
          Frequently Asked Questions
        </h1>
        {accordiandata.map(({ title, para }, index) => {
          return <Accordian key={index} title={title} para={para} />;
        })}
        <div className="my-6">
          <h5 className="text-white  text-[1.6vw] text-center leading-tight font-normal pt-[2vw]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <div className=" flex items-center justify-center mt-[1vw] mb-[3vw] gap-[20px]">
            <button
              onSubmit={(e) => e.preventDefault()}
              onClick={goToSignUp}
              className=" bg-red-600 text-white px-[1.2vw] py-[.8vw] rounded-md text-[2vw] w-[400px] "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen h-2 bg-zinc-600"></div>
      <Footer />
    </>
  );
};

export default Home;
