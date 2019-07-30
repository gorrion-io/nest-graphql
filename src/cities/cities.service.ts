import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './city.interface';
import { Model } from 'mongoose';

@Injectable()
export class CitiesService {
    constructor(@InjectModel('City') private cityModel: Model<City>) { }

    async create(city: CityInput): Promise<City> {
        const newCity = new this.cityModel(city);
        return await newCity.save();
    }

    async findAll(): Promise<City[]> {
        return await this.cityModel.find().exec();
    }

    async findOne(id: string): Promise<City> {
        return await this.cityModel.findOne({ _id: id });
    }

    async delete(id: string): Promise<City> {
        return await this.cityModel.findByIdAndRemove(id);
    }
}
