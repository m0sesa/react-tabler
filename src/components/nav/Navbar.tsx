import { ReactComponent as MoonIcon } from '@node_modules/@tabler/icons/icons/moon.svg'
import { ReactComponent as SunIcon } from '@node_modules/@tabler/icons/icons/sun.svg'
import { ReactComponent as SearchIcon } from '@node_modules/@tabler/icons/icons/search.svg'

import { Notification } from '@components/nav/Nav';
import { Link } from '@components/nav/Nav';
import NavLink from '@components/nav/NavLink';
import NotificationPopup from '@components/nav/NotificationPopup'

import logo from '@assets/logo.png'
import useTheme from '@src/hooks/useTheme'

type PageProps = {
    notifications: Array<Notification>,
    hasNewNotification: boolean,
    user_name: string,
    user_title: string,
    mainActionLinks: Array<Link>,
    secActionLinks: Array<Link>
}

export default function Navbar({ notifications, hasNewNotification, user_name, user_title, mainActionLinks, secActionLinks }: PageProps) {
    const changeTheme = useTheme("light");

    return (
        <header className="navbar navbar-expand-md d-none d-lg-flex d-print-none" >
            <div className="container-xl">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav flex-row order-md-last">
                    <div className="d-none d-md-flex">
                        <NavLink title='Enable dark mode' onClick={() => changeTheme("dark")} className="hide-theme-dark">
                            <MoonIcon />
                        </NavLink>
                        <NavLink title='Enable light mode' onClick={() => changeTheme("light")} className="hide-theme-light">
                            <SunIcon />
                        </NavLink>
                        <NotificationPopup title='Last Updates' notifications={notifications} hasNew={hasNewNotification} />
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                            <span className="avatar avatar-sm" style={{ backgroundImage: `url(${logo})` }}></span>
                            <div className="d-none d-xl-block ps-2">
                                <div>{user_name}</div>
                                <div className="mt-1 small text-secondary">{user_title}</div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            {mainActionLinks && mainActionLinks.map((l, index) => (
                                <a href={l.path} className="dropdown-item" key={index}>{l.title}</a>
                            ))}
                            {secActionLinks && <div className="dropdown-divider"></div>}
                            {secActionLinks && secActionLinks.map((l, index) => (
                                <a href={l.path} className="dropdown-item" key={mainActionLinks.length+index}>{l.title}</a>
                            ))}                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <div>
                        <form action="./" method="get" autoComplete="off" noValidate>
                            <div className="input-icon">
                                <span className="input-icon-addon">
                                    <SearchIcon />
                                </span>
                                <input type="text" defaultValue="" className="form-control" placeholder="Search…" aria-label="Search in website" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}