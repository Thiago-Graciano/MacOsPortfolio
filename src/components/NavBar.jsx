import dayjs from "dayjs"
import { navLinks, navIcons } from "#constants/index.js"
import useWindowStore from "#store/window.js"

const NavBar = () => {
    const { openWindow } = useWindowStore();

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Logo" />
                <p className="font-bold">Thiago Graciano</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img
                                src={img}
                                className="icon-hover"
                                alt={`icon-${id}`}
                            />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format("DD/MM HH:mm")} </time>
            </div>
        </nav>
    )
}

export default NavBar