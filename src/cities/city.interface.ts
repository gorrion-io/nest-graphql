import { Document } from 'mongoose';

export interface City extends Document {
 readonly name: string;
 readonly country: string;
 readonly population: number;
}