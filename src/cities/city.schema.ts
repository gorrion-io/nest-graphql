import * as mongoose from 'mongoose';

export const CitySchema = new mongoose.Schema({
    name: String,
    country: String,
    population: Number,
});