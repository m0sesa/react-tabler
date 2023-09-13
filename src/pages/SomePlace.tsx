import Footer from '@components/Footer'
import Modal from '@components/Modal'
import PageHeader from '@components/PageHeader'
import Nav from '@components/nav/Nav.tsx'

import { ReactComponent as PlusIcon } from '@node_modules/@tabler/icons/icons/plus.svg'
import { useRef } from 'react'

export default function SomePlace() {
  const headerModalId = 'header-modal'
  const headerModalCloseRef = useRef<null | HTMLButtonElement>(null)

  // function to close modal programmatically
  const closeModal = () => {
    headerModalCloseRef.current?.click()
    console.log(headerModalCloseRef)
  }

  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <PageHeader
          title='Some Place'
          modalId={headerModalId}
          buttonTitle='New Ticket'
          buttonIcon={<PlusIcon />}
          secondaryLinks={[]}
        />
        {/* <!-- Page body --> */}
        <div className="page-body">
          <div className="container-xl">
            Where Am I?
          </div>
        </div>

        <Modal id={headerModalId}
          dismissOnClickOutside={false}
          modalClose={headerModalCloseRef}
          body={<>
          </>}
          footer={<>
          <button type='button' className='btn btn-success ms-auto' >
            Add/Submit
          </button>
              </>}
        />

        <Footer />
      </div>
    </>
  )
}
