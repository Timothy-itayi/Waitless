import express from 'express'
import * as db from '../db/customerOrders'

const router = express.Router()

//POST /api/v1/customerorders
router.post('/', async (req, res) => {
  try {
    await db.addCustomerOrder(req.body)

    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to add customer order',
        },
      })
    }
  }
})

export default router