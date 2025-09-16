import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Discipline } from 'src/modules/discipline/persistence/schemas/discipline.schema';

export type CourseDocument = HydratedDocument<Course>

@Schema()
export class Course {
    _id: ObjectId

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    workload: number

    @Prop({ required: true })
    startDate: Date

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discipline' }] })
    disciplines: Discipline[]
}

export const CourseSchema = SchemaFactory.createForClass(Course)