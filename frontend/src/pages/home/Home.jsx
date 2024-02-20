import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[700px] rounded-lg overflow-hidden w-[100%]  bg-transparent ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
