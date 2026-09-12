
function Footer() {
    return (
        <div className="flex justify-between py-7 m-20 mb-10 border-b border-b-gray-300">
            <div className="flex flex-col gap-3">
                <div>
                    <img src="/src/assets/logo-text.png" alt="" className="w-34 " />
                </div>
                <p>Curated tools, technologies, and resources for developers building
                    modern software. </p>
                <div className="flex gap-3 font-bold">
                    <a href="">GitHub</a>
                    <a href="">Twitter</a>
                    <a href="">Linkedin</a>
                </div>
            </div>
            <div>
                <ul>
                    <li className="font-bold uppercase">Product</li>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="font-bold uppercase">Company</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="font-bold uppercase">Legal</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer