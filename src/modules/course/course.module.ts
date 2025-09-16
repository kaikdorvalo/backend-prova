import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Course, CourseSchema } from "./persistence/schemas/course.schema";
import { CourseService } from "./core/services/course.service";
import { CourseController } from "./http/controllers/course.controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }])],
    providers: [CourseService],
    controllers: [CourseController],
    exports: [CourseService]
})
export class CourseModule { }