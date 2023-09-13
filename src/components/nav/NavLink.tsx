type PageProp = {
    title: string;
    children: JSX.Element;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    className?: string
}
export default function NavLink({title, children, onClick, className}: PageProp){
    return (
        <a href="#" className={`nav-link px-0 ${className}`} title={title} data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        onClick={onClick}>
        {children}
    </a> 
    )
}