import { Link } from "@components/nav/Nav";

type PageProp = {
    title: string;
    path: string;
    icon: JSX.Element;
    isActive: boolean;
    secondaryLinks?: Array<Link>
}

export default function NavItem({ title, path, icon, isActive, secondaryLinks }: PageProp) {
    const content = secondaryLinks ?
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {icon}
                </span>
                <span className="nav-link-title">
                    {title}
                </span>
            </a>
            <div className="dropdown-menu">
                <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                        {secondaryLinks.map((l, index) => (
                            <a className={`dropdown-item text-${l.bg}`} href={l.path} key={index}>
                                {l.icon &&
                                l.icon}
                                {l.title}
                                {l.isNew && <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </li>
        :
        <li className={`nav-item ${isActive ? 'active' : ''}`}>
            <a className="nav-link" href={path} >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {icon}
                </span>
                <span className="nav-link-title">
                    {title}
                </span>
            </a>
        </li>

    return content
}