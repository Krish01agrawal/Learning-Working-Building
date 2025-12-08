import { Prop, Schema } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from "mongoose";

@Schema()   
export class Address {
    @Prop({ required: true })
    street: string;
    @Prop({ required: true })
    city: string;
    @Prop({ required: true })
    state: string;
    @Prop({ required: true })
    zip: string;
}