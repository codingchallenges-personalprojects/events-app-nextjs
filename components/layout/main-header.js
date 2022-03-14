import Link from 'next/link';

const MainHeader = () => {
    return (
        <header>
        <div>
<Link Link='/'>NextEvents</Link>

        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/events'>Browse All Events</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}