import request from 'superagent'
import { MenuItemDb } from '../../models/MenuItem'

const rootUrl = '/api/v1'

export async function getAllMenuItems() {
  const res = await request.get(rootUrl + '/menuitems')
  return res.body
}

export async function getMenuItemById(id: number) {
  const res = await request.get(rootUrl + '/menuitems/' + id)
  return res.body
}

export async function addMenuItem(newMenuItem: MenuItemDb) {
  const res = await request.post(rootUrl + '/menuitems').send(newMenuItem)
  return res.body
}

export async function editMenuItem(newMenuItem: MenuItemDb, id: number) {
  const res = await request.patch(rootUrl + '/menuitems/'+ id).send({newMenuItem, id})
  return res.body
}

export async function deleteMenuItem(id: number) {
  const res = await request.delete(rootUrl + '/menuitems/' + id).send({id})
  return res.body
}