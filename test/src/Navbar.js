export default function Navbar() {
    const path = window.location.pathname;
    return <nav className="nav">
        <a href="/" className="site-title">Esports Frenzy</a>
        <ul>
            <li>
                <CustomLink href="/about">About</CustomLink>
            </li>
            <li>
                <CustomLink href="/contact">Contact Us</CustomLink>
            </li>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}> {children} </a>
        </li>
    )
}