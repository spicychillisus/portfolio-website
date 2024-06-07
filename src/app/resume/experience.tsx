import Image from "next/image";

const experiences = [
    {
        id: 1,
        display: "",
        tittle: "Portfolio Website",
        description: "You are looking at it now! This website was made with TailwindCSS and Nextjs 14.",
        link: ""
    },
    
]


export function Experience() {
    experiences.forEach((e) => {
        console.log(e.id);
        return (
            <section>
                <div className="
                h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100
                ">
                    
                    <h1 className="text-center text-white font-bold">
                        {e.tittle}
                    </h1>
                </div>
            </section>
        );
    })
}

