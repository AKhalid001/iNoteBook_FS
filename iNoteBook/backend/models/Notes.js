import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  discription: {
    type: String,
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

export default model('note', NoteSchema);