import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import MenuItems from '../Menu/MenuItems'
import Contact from '../Contact'
import Cart from '../Cart'
import SuccessPage from '../SuccessPage'
import FailedPage from '../FailedPage'
import HomeMenu from '../HomeMenu'
import SeanTestingMenu from '../Menu/SeanTestingMenu'

function CustomerRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableNo" element={<Home />} />

        <Route
          path="/table/:tableNo/menu"
          element={
            <>
              <div>
                <HomeMenu />
              </div>
              <SeanTestingMenu />
            </>
          }
        />
        <Route path="/table/:tableNo/contact" element={<Contact />} />
        <Route
          path="/table/:tableNo/cart"
          element={<Cart handlePaymentSubmit={() => {}} />}
        />
        <Route
          path="/table/:tableNo/order/success"
          element={<SuccessPage name={'test'} checkStatus={() => {}} />}
        />
        <Route
          path="/table/:tableNo/order/fail"
          element={<FailedPage name={'test'} retry={() => {}} />}
        />
      </Routes>
    </>
  )
}

export default CustomerRoutes
