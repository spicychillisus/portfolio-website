import pictures from "./picturesData"
import Picture from "./picture"; // object



export default function PhotoGallery(gallery: Picture[]) {
    // display 2 pictures side by side if therare only 2 pictures
    if (pictures.length <= 2) {
        dualPictures();
    } else {
        manyPictures();
    }
}

function dualPictures() {
    return (
        <section>
            <div className="grid">
                
            </div>
        </section>
    )
}

function manyPictures() {

}