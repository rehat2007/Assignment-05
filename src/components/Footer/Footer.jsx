function Footer() {
  return (
    <footer className="w-full border-b border-gray-300 px-6 py-10 sm:px-10 lg:px-20 lg:py-12">

      {/* Main Footer */}
      <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">

        {/* Logo + Description + Social */}
        <div className="flex w-full flex-col items-center gap-3 lg:w-2/5 lg:items-start">
          <div>
            <img
              src="/src/assets/logo-text.png"
              alt="Dev Stack"
              className="w-34"
            />
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-5 font-bold text-gray-600">
            <a href="">GitHub</a>
            <a href="">Twitter</a>
            <a href="">LinkedIn</a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid w-full grid-cols-3 gap-6 text-sm sm:max-w-md lg:w-1/2 lg:max-w-none lg:gap-10">

          {/* Product */}
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold uppercase">Product</li>
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold uppercase">Company</li>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold uppercase">Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col items-center gap-3 border-t border-gray-200 pt-6 text-sm text-gray-400 sm:flex-row sm:justify-between">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer