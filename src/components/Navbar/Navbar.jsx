const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 py-5 border-b border-b-gray-300 sticky top-0 bg-white">
        <img src="/src/assets/logo-text.png" alt="" />
        <div className="flex gap-5 font-bold">
            <a href="" className="text-pink-600">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <div className="flex gap-4">
          <button className="">Sign In</button>
          <button className="bg-pink-600 py-1.5 px-4 text-white rounded-2xl">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar