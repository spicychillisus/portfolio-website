import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="w-full h-24 shadow-xl bg-gray-800">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                {/* logo */}
                <Link href='/'>
                    <h1 className="font-bold">Asher Reyes</h1>
                </Link>
                <div>
                    <ul className="hidden sm:flex">
                        <Link href="/projects">
                            <li className="ml-10 lowercase hover:border-b text-xl">Projects</li>
                        </Link>
                        <Link href="/photos">
                            <li className="ml-10 lowercase hover:border-b text-xl">Photography Works</li>
                        </Link>
                    </ul>
                </div>
            </div>

        </nav>
    )
}


export default Navbar;