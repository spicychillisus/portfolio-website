
const HeroSection = () => {
    return (
        <section className="mt-6">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                    <div className="col-span-2">
                        <h1 className="text-white font-bold text-4xl lg:text-6xl mb-3">
                            Hello, I'm Asher Reyes
                        </h1>
                        <p className="text-lg md:text-base sm:text-sm">
                            I am a web developer and a photographer. 
                            I do web development when I'm busy and I do photogrpahy when I'm not busy.
                        </p>
                        {/* small grid for the buttons */}
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div>
                                no
                            </div>
                            <div>
                                no
                            </div>
                        </div>
                    </div>
                    <div className="text-white">
                        
                    </div>
                </div>
            

        </section>
        
    )
}

export default HeroSection;