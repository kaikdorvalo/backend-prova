import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Discipline, DisciplineSchema } from "./persistence/schemas/discipline.schema";
import { DisciplineService } from "./core/services/discipline.service";
import { DisciplineController } from "./http/controllers/discipline.controller";
import { CourseModule } from "../course/course.module";

@Module({
    imports: [MongooseModule.forFeature([{ name: Discipline.name, schema: DisciplineSchema }]), CourseModule],
    providers: [DisciplineService],
    exports: [DisciplineService],
    controllers: [DisciplineController]
})
export class DisciplineModule { }