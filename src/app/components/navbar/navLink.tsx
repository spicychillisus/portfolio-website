import Link from "next/link";

interface NavLinkProps {
    name: string;
    href: string;
}

const NavLink =({name, href}: NavLinkProps) => {
    return (
        <Link href={href}>
            <li className="ml-8 lowercase text-base list-none">
                {name}
            </li>
        </Link>
    )
}

export default NavLink;