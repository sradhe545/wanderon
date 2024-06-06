import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect('mongodb+srv://r:123@cluster0.zwvwxqq.mongodb.net/wanderon-assessment');
}
