type PageProps = {
    id: string;
    title?: string;
    status?: 'danger' | 'warning' | 'success';
    dismissOnClickOutside?: boolean;
    body: JSX.Element;
    footer: JSX.Element;
    size?: 'lg' | 'sm';
    modalClose: React.MutableRefObject<HTMLButtonElement | null>
};
export default function Modal({ id, title, status, dismissOnClickOutside, body, footer, size, modalClose }: PageProps) {
    return (
        <div
            className='modal modal-blur fade'
            id={id}
            tabIndex={-1}
            role='dialog'
            aria-hidden='true'
            data-bs-backdrop={!dismissOnClickOutside ? 'static' : 'true'}
            data-bs-keyboard={!dismissOnClickOutside ? 'false' : 'true'}
        >
            <div className={`modal-dialog modal-dialog-centered modal-${size ?? 'sm'}`} role='document'>
                <div className='modal-content'>
                    {title ? (
                        <div className='modal-header'>
                            <h5 className='modal-title'>{title}</h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                                ref={modalClose}
                            ></button>
                        </div>
                    ) : (
                        <>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                                ref={modalClose}
                            ></button>
                            <div className={`modal-status bg-${status ?? 'primary'}`}></div>
                        </>
                    )}

                    <div className='modal-body text-center'>
                        {body}
                    </div>
                    <div className="modal-footer">
                        <a href='#' className='btn btn-link link-secondary' data-bs-dismiss='modal'>
                            Cancel
                        </a>
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    )
}