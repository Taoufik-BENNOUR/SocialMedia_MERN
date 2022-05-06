import Feed from "../feed/Feed";
import Rightbar from "../righbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import './home.css'
const Home = () => {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
    </div>
    
    </>
  );
};

export default Home;
