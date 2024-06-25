/* 
solely for the main page of the website
this component is to not be used anywhere else in the website
*/







//console.log(projects[0].languages[0]);



const AboutMe = () => {
    return (
        <div className="mt-2 mb-8 py-8 border-white border-2 rounded-2xl">
            <h2 className="font-bold text-6xl text-white text-center pb-2">
                About Me
            </h2>
            <div className="lg:pl-10 lg:pr-10 lg:ml-10 lg:mr-10 sm:text-center">
                <p className="text-center text-white mt-2 text-base">
                    I am currently a year 2 student in Singapore Polytechnic doing a Diploma in Information Technology, specialising in software
                    development. During my free time, I enjoy doing photography, and like to primarily shoot vehicles and landscapes, as well as design posters and websites.
                </p>
                <p className="text-center text-white mt-2 text-base">
                    I was never good at programming in the first place; I even entered Polytechnic without any coding background.
                    But I'm always working hard to try and improve myself and my skills so that one day I could change the world with coding.
                </p>
            </div>
        </div>
    );
}

export default AboutMe; 