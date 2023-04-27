import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  countInStock: number;

  @Prop()
  availableSizes: string[];

  @Prop()
  available: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);