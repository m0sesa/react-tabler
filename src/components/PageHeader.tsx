interface SecondaryLinks {
    href: string,
    title: string
}

type PageProps = {
    preTitle?: string;
    title: string;
    buttonTitle?: string;
    modalId: string;
    secondaryLinks?: Array<SecondaryLinks>;
    buttonIcon?: JSX.Element
}

export default function PageHeader({ preTitle, title, buttonTitle, modalId, secondaryLinks, buttonIcon }: PageProps) {
    return (
        <div className="page-header d-print-none">
            <div className="container-xl">
                <div className="row g-2 align-items-center">
                    <div className="col">
                        {preTitle && (
                            <div className="page-pretitle">{preTitle}</div>
                        )}
                        <h2 className="page-title">
                            {title}
                        </h2>
                    </div>
                    {/* <!-- Page title actions --> */}
                    <div className="col-auto ms-auto d-print-none">
                        <div className="btn-list">
                            {secondaryLinks && secondaryLinks.map((link, index) => (
                                <span className="d-none d-sm-inline">
                                    <a href={link.href} className="btn" key={'ph'+index}>
                                        {link.title}
                                    </a>
                                </span>
                            ))}
                            {buttonTitle &&
                                <>
                                    <a href="#" className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target={modalId}>
                                        {buttonIcon && buttonIcon} {buttonTitle}
                                    </a>
                                    <a href="#" className="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target={modalId} aria-label={buttonTitle}>
                                        {buttonIcon && buttonIcon}
                                    </a>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}