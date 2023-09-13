export default function Footer() {
    return (
        <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                &nbsp;Copyright &copy; 2023&nbsp;
                                <a href="." className="link-secondary">Directorate of Digital Services</a>.
                                All rights reserved.&nbsp;
                            </li>
                            <li className="list-inline-item">
                                <a href="./changelog.html" className="link-secondary" rel="noopener">
                                    v1.0.0
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}