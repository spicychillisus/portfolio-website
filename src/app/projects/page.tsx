
import Navbar from "../components/navbar/navbarOld"
import Footer from "../components/footer/footer"
import { metadata } from "../layout"
import { Metadata } from "next"

export default function Projects() {
    metadata.title = "projects"
    return (
        <main>
            <Navbar />
                
            <Footer />
        </main>
    )
}