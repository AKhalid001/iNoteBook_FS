import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const NoteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    default: Date.now
  },
});

export default model('Notes', NoteSchema)