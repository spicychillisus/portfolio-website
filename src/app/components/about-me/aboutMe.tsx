/* 
solely for the main page of the website
this component is to not be used anywhere else in the website
*/

//import { RandomPictureDisplay } from "@/app/photos/component/pictureDisplay";

const AboutMe = () => {
    return (
        <div className="mt-2">
            <h2 className="font-bold text-5xl text-white text-center">
              About Me
            </h2>
            <div className="pl-10 pr-10 ml-10 mr-10">
                <p className="text-center text-white mt-2 text-base">
                    I am currently a year 2 student in Singapore Polytechnic doing a Diploma in Information Technology, specialising in software
                    development. A fun fact about me is that on my birthday, both Shopee and Lazada have sales.
                </p>
                <p className="text-center text-white mt-2 text-base">
                    I was never good at programming in the first place. I even entered Polytechnic without any coding background.
                    But I'm always working hard to try and improve myself and my skills so that one day I could change the world with coding.
                </p>
            </div>
            
        </div>
    )
}

export default AboutMe; 