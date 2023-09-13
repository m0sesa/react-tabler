import Footer from '@components/Footer'
import PageHeader from '@components/PageHeader'
import Nav from '@components/nav/Nav.tsx'

import { ReactComponent as PlusIcon } from '@node_modules/@tabler/icons/icons/plus.svg'


export default function SomePlace() {
  return (
    <>
      <Nav/>
      <div className="page-wrapper">
        <PageHeader title='Some Place' modalId='#ff4500' buttonTitle='New Ticket' buttonIcon={<PlusIcon />} secondaryLinks={[{ href: '', title: "New One" }]} />
        {/* <!-- Page body --> */}
        <div className="page-body">
          <div className="container-xl">
            Where Am I?
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
