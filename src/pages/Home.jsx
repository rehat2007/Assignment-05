import Footer from "../components/Footer/Footer.jsx"
import Hero from "../components/Hero/Hero.jsx"
import Main from "../components/main/Main.jsx"
import Navbar from "../components/Navbar/Navbar.jsx"

import { Suspense } from "react"

function Home() {
    return (
        <>
            <Suspense fallback={<p>Loding.....</p>} >
                <Navbar />
                <Hero />
                <Main/>
                <Footer />
            </Suspense>
        </>
    )
}

export default Home