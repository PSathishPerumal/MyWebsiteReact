import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa"


const navLink = [
    {
        name: "Home",
        icon: <FaHome />,
        href: "#",
    },

    {
        name: "About",
        icon: <FaInfoCircle />,
        href: "#",
    },

    {
        name: "Services",
        icon: <FaServicestack />,
        href: "#",
    },

    {
        name: "Contact",
        icon: <FaEnvelope />,
        href: "#",
    },
]



function Navbar() {
    return (
        <>
            <nav className="bg-gray-900 text-white p-3">
                <div className="container flex mx-auto items-center justify-between">
                    <h1 className="text-2xl font-bold">🚀My Website</h1>
                    <ul className="flex space-x-4">
                        {/* <li>
            <a className="flex items-center gap-1 hover:text-blue-400" href=""><FaHome />Home</a>
    
        </li>
        <li>
        <a className="flex items-center gap-1 hover:text-blue-400" href=""><FaInfoCircle />About</a>

        </li>
        <li>
        <a className="flex items-center gap-1 hover:text-blue-400" href=""><FaServicestack />Services</a>

        </li>
        <li>
        <a className="flex items-center gap-1 hover:text-blue-400" href=""><FaEnvelope />Contact</a>

        </li> */}
                        {navLink.map((link, index) => (
                            <li key={index}>
                                <a className="flex items-center gap-1 hover:text-blue-400" href={link.href}>{link.icon}{link.name}</a>

                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navbar;