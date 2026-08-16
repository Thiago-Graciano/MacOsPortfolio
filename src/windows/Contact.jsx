import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contato</h2>
            </div>

            <div className="p-5 space-y-5">
                <img
                    src="/images/Thiago-Unect2-400x400.png"
                    alt="Thiago"
                    className="w-20 rounded-full"
                />

                <h3>Vamos manter contato!</h3>
                <p>Tem alguma ideia? Um bug para corrigir? Ou só quer conversar sobre tecnlogia? Me envie uma mensagem!</p>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img
                                    src={icon}
                                    alt={text}
                                    className="size-5"
                                />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow