import express from "express"

import {noteLister, noteGetter, noteCreator, noteDeletor, noteUpdator} from '../controller/notesController.js'

const route = express.Router()

route.get('/', noteLister)
route.get('/:id', noteGetter)
route.post('/', noteCreator)
route.delete('/:id', noteDeletor)
route.put('/:id', noteUpdator)

export default route