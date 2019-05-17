import express from 'express'
import mongoose from 'mongoose'
import uniqid from 'uniqid'
import Users from '../database/models/users.model'
import { createError } from '../utilities'
import {
  USER_NOT_FOUND,
  USER_ID_INVALID,
  USER_DELETED_SUCCESSFULLY,
  USER_ADDED_SUCCESSFULLY,
  ERROR_DELETING_USER,
  ERROR_ADDING_USER,
} from '../constants/StaticConstants'

const router = express.Router()
router.get('/', (req, res, next) => {
  Users.find({}, { _id: 0 })
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
    userId = -1,
  } = req.body

  Users.deleteOne({ userId }, () => {
    next(createError(400, ERROR_DELETING_USER))
    return null
  })
  next(createError(200, USER_DELETED_SUCCESSFULLY))
})

router.post('/add', (req, res, next) => {
  const {
    name = '',
    gender = '',
    age = 0,
    email = '',
    address = '',
  } = req.body
  const newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
    userId: uniqid.time(),
    name,
    gender,
    age,
    email,
    address,
  })
  newUser.save()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, USER_ADDED_SUCCESSFULLY))
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_USER))
    })
})

export default router
