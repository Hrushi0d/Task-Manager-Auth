import mongoose, { Model } from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true,trim: true,},
    description: {type: String,trim: true,required:true,},
    dueDate: {type: Date,},
    status: {type: String,enum: ['pending', 'in-progress', 'completed'],default: 'pending',},
    priority: {type: String,enum: ['low', 'medium', 'high'],default: 'medium',},
}, {
    timestamps: true
});

export const task = mongoose.model('Task', taskSchema);