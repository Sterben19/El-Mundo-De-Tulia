import { useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { CategoriesMobileButton } from './CategoriesMobileButton'
import { CategoriesRender } from './CategoriesRender'
import { Button } from 'react-bootstrap'

export const CategoriesOffCanvas = () => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState(undefined)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {width && width < 768 && (
        <CategoriesMobileButton handleClick={handleShow} />
      )}

      <Offcanvas show={show} onHide={handleClose}>
        <div className="py-3 flex justify-between px-2">
          <Offcanvas.Title>Categorías</Offcanvas.Title>
          <Button onClick={handleClose} className="text-black">
            X
          </Button>
        </div>
        <Offcanvas.Body>
          <CategoriesRender />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
