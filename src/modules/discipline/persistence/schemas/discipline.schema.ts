import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, ObjectId } from "mongoose";
import { Course } from "src/modules/course/persistence/schemas/course.schema";

export type DisciplineDocument = HydratedDocument<Discipline>

@Schema()
export class Discipline {

    _id: ObjectId

    @Prop({ required: true })
    name: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true })
    course: Course
}

export const DisciplineSchema = SchemaFactory.createForClass(Discipline)