type PageProp = {
    title: string;
    message: string;
    isDotAnimated: boolean;
    dotBg?: string
}

export default function NotificationPopupItem({title, message, isDotAnimated, dotBg}: PageProp) {
    return (
        <div className="list-group-item">
            <div className="row align-items-center">
                <div className="col-auto"><span className={`status-dot ${isDotAnimated ? 'status-dot-animated' : ''} ${dotBg ? `bg-${dotBg}` : ''} d-block`}></span></div>
                <div className="col text-truncate">
                    <a href="#" className="text-body d-block">{title}</a>
                    <div className="d-block text-secondary text-truncate mt-n1">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
}