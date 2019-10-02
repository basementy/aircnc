const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

// Rotas - Sessions
routes.post('/sessions', SessionController.store)

// Rotas - Spots
routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail') , SpotController.store)

// Rotas - Booking
routes.post('/spots/:spot_id/bookings', BookingController.store)

// Rotas - Dashboard
routes.get('/dashboard', DashboardController.show)

module.exports = routes