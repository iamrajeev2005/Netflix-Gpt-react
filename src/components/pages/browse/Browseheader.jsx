import { getAuth, signOut } from "firebase/auth";
import Logo from "../../Logo";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";

const Browse = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/auth");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="flex items-center gap-[40vw] px-6 py-2 text-white fixed top-0 left-0 z-20 bg-transparent">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="flex items-center gap-6">
            <a href="/">Home</a>
            <a href="/">TV Shows</a>
            <a href="/">Movies</a>
            <a href="/">New & Popular</a>
            <a href="/">My List</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          🔎
          <button onClick={handleClick}>Sign Out</button>
        </div>
      </div>
    </>
  );
};

export default Browse;
