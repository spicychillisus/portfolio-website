
import Link from 'next/link';

interface CustomButtonProps {
    webLink: string;
    webText: string;
}

// to display a button of a custom size and color
export default function CustomButton({webLink, webText}: CustomButtonProps) {
    return (
        <div className="bg-gradient-to-r from-indigo-800 to-purple-900 rounded-3xl lg:h-10">
            <Link href={`/${webLink}`}>
                <li className="text-white font-medium list-none text-center mt-2">
                    {webText}
                </li>
            </Link>
        </div>
    )
}