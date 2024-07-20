// contains the tittle, date, and time of the last update of the website

interface HeaderProps {
    tittle: string;
    user: string;

}

const date = new Date();
const dateFormat = new Intl.DateTimeFormat(
    'en',
    {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
);
const formattedDate = dateFormat.format(date);



const Header = ({tittle, user}: HeaderProps) => {
    return (
        <></>
    )
}

export default Header;