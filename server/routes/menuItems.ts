import express from 'express'
import * as db from '../db/menuItems'
import { menuItemSchema, menuItemMutationSchema } from '../../models/MenuItem'

const router = express.Router()

//GET /api/v1/menuitems
router.get('/', async (req, res) => {
  try {
    const menuItems = await db.getAllMenuItems()
    res.json({ menuItems })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve menu items',
        },
      })
    }
  }
})

//GET /api/v1/menuitems/:id
router.get('/:id', async (req, res) => {
  try {
    const fetchedMenuItem = await db.getMenuItemById(Number(req.params.id))
    res.json(fetchedMenuItem)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve menu item, id: ' + req.params.id,
        },
      })
    }
  }
})

//POST /api/v1/menuitems
router.post('/', async (req, res) => {
  try {
    await db.addMenuItem(menuItemSchema.parse(req.body))

    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to add menu Item',
        },
      })
    }
  }
})

//POST /api/v1/menuitems/:id
router.patch('/:id', async (req, res) => {
  try {
    await db.updateMenuItem(menuItemMutationSchema.parse(req.body))
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to update menu Item',
        },
      })
    }
  }
})

export default router
