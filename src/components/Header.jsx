import { IoMoonOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className="bg-[blue] w-full flex justify-between">
      <h1>devfinder</h1>
      <div className="flex justify-between">
        <span>Dark</span>
        <IoMoonOutline className="text-[#697C9A]" />
      </div>
    </header>
  );
};

export default Header;
