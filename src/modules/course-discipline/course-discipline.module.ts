import { Module } from "@nestjs/common";
import { CourseModule } from "../course/course.module";
import { DisciplineModule } from "../discipline/discipline.module";
import { CourseDisciplineService } from "./core/services/course-discipline.service";
import { CourseDisciplineContoller } from "./http/controllers/course-discipline.controller";

@Module({
    imports: [CourseModule, DisciplineModule],
    providers: [CourseDisciplineService],
    controllers: [CourseDisciplineContoller]
})
export class CourseDisciplineModule { }