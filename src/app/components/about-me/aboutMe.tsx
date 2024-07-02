/* 
solely for the main page of the website
this component is to not be used anywhere else in the website
*/

const AboutMe = () => {
    return (
        <div className="mt-8 mb-8 py-8 my-20 border-white border-2 rounded-2xl">
            <h2 className="font-bold text-6xl text-white text-center pb-2">
                About Me
            </h2>
            <div 
            className="lg:pl-10 lg:pr-10 lg:ml-10 lg:mr-10 sm:text-center text-white mt-2 text-base"
            >
                <p>
                    I am currently a year 2 student in Singapore Polytechnic doing a Diploma in Information Technology, specialising in software
                    development.
                </p>
                <p className="mt-2">
                    Over the past one year, I've developed skills in coding with JavaScript, HTML, and CSS to create interactive websites, as well as 
                    designing wireframes using Figma. I've also developed skills in database management using MySQL Workbench and am currently learning PostgresSQL
                    database management. At the same time, I'm also learning the Java programming language to develop Android applications.
                    
                </p>
                <p className="mt-2">
                    I am currently self-learning the python programming language, as well as the NextJS library to develop full stack websites,
                    which demonstrates my ability to learn new technologies quickly and efficiently on my own.
                    
                </p>
            </div>
        </div>
    );
}

export default AboutMe; 