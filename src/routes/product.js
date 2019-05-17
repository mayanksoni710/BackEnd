import express from 'express'
import mongoose from 'mongoose'
import uniqid from 'uniqid'
import Products from '../database/models/products.model'
import { createError } from '../utilities'
import {
  USER_ID_MISSING,
  PRODUCT_NOT_FOUND,
  UNABLE_TO_FETCH_PRODUCT_RESPONSE,
  PRODUCT_ID_MISSING,
  CATEGORY_ID_MISSING,
  PRODUCT_ADDED_SUCCESSFULLY,
  PRODUCT_DELETED_SUCCESSFULLY,
  ERROR_DELETING_PRODUCT,
  ERROR_ADDING_PRODUCT,
} from '../constants/StaticConstants'

const router = express.Router()
router.get('/:userId?/:categoryId?/:productId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
      productId = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(400, USER_ID_MISSING))
    return
  }
  if (categoryId === -1) {
    next(createError(400, CATEGORY_ID_MISSING))
    return
  }
  if (productId === -1) {
    next(createError(400, PRODUCT_ID_MISSING))
    return
  }
  Products.find({ userId, categoryId, productId }, { _id: 0 })
    .exec()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, PRODUCT_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, UNABLE_TO_FETCH_PRODUCT_RESPONSE))
    })
})

router.post('/delete', (req, res, next) => {
  const {
    userId = -1,
    categoryId = -1,
    productId = -1,
  } = req.body

  Products.deleteOne({ userId, categoryId, productId }, () => {
    next(createError(400, ERROR_DELETING_PRODUCT))
    return null
  })
  next(createError(200, PRODUCT_DELETED_SUCCESSFULLY))
})

router.post('/add', (req, res, next) => {
  const {
    userId = -1,
    categoryId = -1,
    productName = '',
    productDescription = '',
    productUnitPrice = 0,
    productQuantity = 0,
  } = req.body
  const newProduct = new Products({
    _id: new mongoose.Types.ObjectId(),
    productId: uniqid.time(),
    userId,
    categoryId,
    productName,
    productDescription,
    productUnitPrice,
    productQuantity,
  })
  newProduct.save()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, PRODUCT_ADDED_SUCCESSFULLY))
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_PRODUCT))
    })
})
export default router
