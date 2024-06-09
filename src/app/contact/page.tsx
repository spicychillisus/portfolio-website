
//import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar";
import { metadata } from "../layout";


export default function Contact() {

    metadata.title = "contact"
    
    return(
        <main>
            <Navbar />
            <Footer />
        </main>
    )
}