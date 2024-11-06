import express from 'express';
import { addContact, getContactById } from '../controllers/contactController';

const router = express.Router();

router.post('/add', addContact);
router.get('/:id', getContactById);

export default router;
