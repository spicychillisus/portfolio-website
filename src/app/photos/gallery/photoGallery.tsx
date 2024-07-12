import pictures from "./picturesData"
import Picture from "./picture"; // object



export default function PhotoGallery(gallery: Picture[]) {
    // display 2 pictures side by side if therare only 2 pictures
    if (pictures.length <= 2) {
        dualPictures(gallery);
    } else {
        manyPictures();
    }
}

function dualPictures(pictures: Picture[]) {
    return (
        <section>
            <div className="grid grid-col-2">
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

function manyPictures() {

}