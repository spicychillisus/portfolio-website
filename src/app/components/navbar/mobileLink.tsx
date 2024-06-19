import Link from "next/link";

interface MobileLinkProps {
    name: string;
    route: string;
}


const MobileLink = ({name, route}: MobileLinkProps) => {
    // the background classname is already in the navbar class..?
    // this is created so it's easier to map out in the navbar component
    return (
        <div className="bg-dark">
            <Link href={route}>
                <li className="flex justify-content-center">
                    {name}
                </li>
            </Link>
        </div>
        
    )
}

export default MobileLink;