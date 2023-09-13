import { ReactComponent as ArrowLeftIcon } from '@node_modules/@tabler/icons/icons/arrow-left.svg'

export default function ErrorPage() {
  return (
      <body  className=" border-top-wide border-primary d-flex flex-column">
        <script src="./dist/js/demo-theme.min.js?1692870487"></script>
        <div className="page page-center">
          <div className="container-tight py-4">
            <div className="empty">
              <div className="empty-header">404</div>
              <p className="empty-title">Oops… You just found an error page</p>
              <p className="empty-subtitle text-secondary">
                We are sorry but the page you are looking for was not found
              </p>
              <div className="empty-action">
                <a href="/" className="btn btn-primary">
                  <ArrowLeftIcon />Take me home
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
  )
}
