import Link from "next/link";



const Footer = () => {
    return (
        <footer className="bottom-0 w-full flex justify-center border-t sticky h-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10
">
            <div className="content-center text-center lowercase">
                <h3 className="">asher reyes</h3>
                <span className="">this website was made with nextjs</span>
            </div>
        </footer>
    )
}

// glassmorphism effect made with: https://tailwindcss-glassmorphism.vercel.app/

export default Footer;