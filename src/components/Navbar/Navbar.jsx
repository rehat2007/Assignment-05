import DextopNavbar from "./dextopNavbar"
import PhoneNavbar from "./phoneNavbar"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="hidden w-full md:flex">
        <DextopNavbar />
      </div>

      <div className="flex w-full md:hidden">
        <PhoneNavbar />
      </div>
    </nav>
  );
};


export default Navbar