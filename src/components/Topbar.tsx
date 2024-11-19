import { FaDownload, FaPlus, FaBell } from 'react-icons/fa';
import Image from 'next/image';

const TopBar = () => {
    function logging(){
        console.log(process.env.NODE_ENV)
    }
  return (
    <header className="flex justify-between items-center p-4 text-black mr-5">
        <h3>
          Welcome  
        </h3>

      <div className="flex items-center space-x-10">
        <div onClick={() => { logging() }}><FaDownload size={25} /></div>
        <div><FaPlus size={25} /></div>
        <div><FaBell size={25} /></div>
        
        <div className="relative">
          <Image
            src="/dashboard1.png"
            alt="Profile"
            width={60}
            height={60}
            className="h-8 w-8 rounded-full"
          />
          <div className="absolute top-10 right-0 w-32 bg-white text-black rounded shadow-md hidden">
            <button>Edit</button>
            <button>Settings</button>
            <button>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
