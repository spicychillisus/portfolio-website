import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
//import PictureDisplay from "./component/pictureDisplay";
import HeroPhotos from "./heroSectionPhotos";
import { Metadata } from "next";
import { metadata } from "../layout";

metadata.title = "photos"

const Photos = () => {
    return (
        <main>
            <Navbar />
            <HeroPhotos />
            
            <Footer />
        </main>
    )
}

export default Photos;