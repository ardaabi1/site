import { UilTimes } from '@iconscout/react-unicons';

export default function Main()  {
    const contacts = [
        {
            icon: <i className="fab text-3xl fa-instagram" />,
            title: '@ardaa_mvr',
            href: 'https://instagram.com/ardaa_mvr',
            desc: 'İnstagram'
        },
        {
            icon: <i className="fas text-3xl fa-at" />,
            title: 'a.qrda27@gmail.com',
            href: 'mailto:a.qrda27@gmail.com',
            desc: 'E-Mail'
        },
        {
            icon: <i className="fab text-3xl fa-discord" />,
            title: '!Ardaaa#0001',
            href: 'https://discord.com/users/949959167962124349',
            desc: 'Discord'
        }
    ];
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contacts.map((contact, index) => (
                <a target="_blank" href={contact.href} key={index} className="p-5 flex space-x-3 items-center rounded-lg bg-[#080808]">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-tl from-emerald-400/20`}>
                        {contact.icon}
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <h1 className="leading-none font-bold text-lg md:text-xl lg:text-2xl text-white">{contact.title}</h1>
                        <h1 className="font-light text-sm text-zinc-100">{contact.desc}</h1>
                    </div>
                </a>
            ))}
        </div>
    );
};