const Navbar = () => {
  return (
    <div className="flex justify-around items-center px-10 py-5 border-b border-b-gray-300">
        <img src="/src/assets/logo-text.png" alt="" />
        <div className="flex gap-5">
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <div className="flex gap-5">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar