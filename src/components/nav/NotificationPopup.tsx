import NotificationPopupItem from './NotificationPopupItem';
import { Notification } from '@components/nav/Nav';
import { ReactComponent as BellIcon } from '@node_modules/@tabler/icons/icons/bell.svg'


type PageProps = {
    title: string;
    notifications: Array<Notification>
    hasNew: boolean
}

export default function NotificationPopup({ title, notifications, hasNew }: PageProps) {
    return (
        <div className="nav-item dropdown d-md-flex me-3">
            <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex={-1} aria-label="Show notifications">
                <BellIcon />
                <span className={`badge ${hasNew?'bg-red':''}`}></span>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card"  style={{maxWidth: '60vw'}}>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div className="list-group list-group-flush list-group-hoverable">
                        {
                            notifications && notifications.map((n, index) => (
                                <NotificationPopupItem key={index}
                                    title={n.title}
                                    message={n.message}
                                    isDotAnimated={n.isDotAnimated}
                                    dotBg={n.dotBg}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}