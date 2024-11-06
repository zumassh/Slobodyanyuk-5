import { Request, Response } from 'express';
import Contact from '../models/contactModel';

export const addContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, phone } = req.body;
        const record = new Contact({ name, phone });
        await record.save();
        res.status(201).json(record);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const getContactById = async (req: Request, res: Response): Promise<void> => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404).json({ message: 'Contact not found' });
            return;
        }
        res.json(contact);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};
