import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
//import PictureDisplay from "./component/pictureDisplay";
import HeroPhotos from "./gallery/heroSectionPhotos";
import PhotoGallery from "./gallery/photoGallery";
import { metadata } from "../layout";

metadata.title = "photos"

const Photos = () => {
    return (
        <main>
            <Navbar />
            <HeroPhotos />
            {/* <PhotoGallery /> */}
            <Footer />
        </main>
    )
}

export default Photos;