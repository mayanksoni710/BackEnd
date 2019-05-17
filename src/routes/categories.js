import express from 'express'
import mongoose from 'mongoose'
import uniqid from 'uniqid'
import Categories from '../database/models/categories.model'
import { createError } from '../utilities'
import {
  USER_NOT_FOUND,
  USER_ID_INVALID,
  USER_ID_MISSING,
  CATEGORY_ADDED_SUCCESSFULLY,
  ERROR_ADDING_CATEGORY,
  CATEGORY_DELETED_SUCCESSFULLY,
  ERROR_DELETING_CATEGORY,
} from '../constants/StaticConstants'

const router = express.Router()
router.get('/:userId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(400, USER_ID_MISSING))
  }
  Categories.find({ userId }, { _id: 0 })
    .exec()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, USER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, USER_ID_INVALID))
    })
})

router.post('/delete', (req, res, next) => {
  const {
    userId = '',
    categoryId = '',
  } = req.body
  Categories.deleteOne({ userId, categoryId }, () => {
    next(createError(400, ERROR_DELETING_CATEGORY))
    return null
  })
  next(createError(200, CATEGORY_DELETED_SUCCESSFULLY))
})

router.post('/add', (req, res, next) => {
  const {
    userId = -1,
    categoryName = '',
  } = req.body
  const newCategory = new Categories({
    _id: new mongoose.Types.ObjectId(),
    categoryId: uniqid.time(),
    userId,
    categoryName,
  })
  newCategory.save()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, CATEGORY_ADDED_SUCCESSFULLY))
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_CATEGORY))
    })
})

export default router
