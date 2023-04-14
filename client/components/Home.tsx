import React, { useState } from 'react'
import HomeMenu from './HomeMenu'
import CategoriesNavBar from './Menu/CategoriesNavBar'

import Cart from './Cart'
import SuccessPage from './SuccessPage' // import your SuccessPage component here

import { Header } from './Header'

export default function Home() {
  const [isPaymentSubmitted, setPaymentSubmitted] = useState(false)

  const handlePaymentSubmit = () => {
    // Simulating payment submission
    console.log('Simulating payment submission...')

    // Simulating API call with a delay of 2 seconds
    setTimeout(() => {
      console.log('Payment submitted successfully!')
      setPaymentSubmitted(true)
    }, 2000)
  }
  return (
    <div>
      {/* <Header />
      <HomeMenu />
      <CategoriesNavBar />

      {isPaymentSubmitted ? (
        //Mock Render the SuccessPage component if payment has been submitted
        <SuccessPage
          name={''}
          checkStatus={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      ) : (
        <Cart handlePaymentSubmit={handlePaymentSubmit} />
      )} */}
    </div>
  )
}

// import React from 'react'
// import HomeMenu from './HomeMenu'
// import CategoriesNavBar from './Menu/CategoriesNavBar'
// import Cart from './Cart'

// export default function Home() {
//   return (
//     <div>
//       <HomeMenu />
//       <CategoriesNavBar />

//       <Cart
//         handlePaymentSubmit={function (): void {
//           throw new Error('Function not implemented.')
//         }}
//       />
//     </div>
//   )
// }
