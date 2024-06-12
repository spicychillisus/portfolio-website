import Link from "next/link";

interface MobileLinkProps {
    name: string;
    href: string;
}


const MobileLink = ({name, href}: MobileLinkProps) => {
    return (
        <Link
            href={name}
        >
            
        </Link>
    )
}

export default MobileLink;