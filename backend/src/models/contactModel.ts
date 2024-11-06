import mongoose, { Schema, Document } from 'mongoose';

interface IContact extends Document {
    name: string;
    phone: string;
}

const ContactSchema: Schema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true }
});

export default mongoose.model<IContact>('Contact', ContactSchema);
