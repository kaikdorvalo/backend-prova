import { Body, Controller, Delete, Param, Post, Res } from "@nestjs/common";
import { CourseService } from "src/modules/course/core/services/course.service";
import { DisciplineService } from "src/modules/discipline/core/services/discipline.service";
import { CourseDisciplineService } from "../../core/services/course-discipline.service";
import { CourseIdDto } from "src/modules/course/http/dto/course-id.dto";
import { Response } from "express";
import { CreateDisciplineDto } from "src/modules/discipline/http/dto/create-discipline";
import { DeleteDisciplineFromCourseDto } from "../dto/delete-discipline-from-course.dto";

@Controller('course-disciplines')
export class CourseDisciplineContoller {
    constructor(
        private service: CourseDisciplineService
    ) { }

    @Post('/disciplines')
    public async createDiscipline(@Body() dto: CreateDisciplineDto, @Res() response: Response) {
        return this.service.createDiscipline(dto, response)
    }

    @Delete('/courses/:id')
    public async deleteCourseById(@Param() params: CourseIdDto, @Res() response: Response) {
        return this.service.deleteCourseById(params.id, response)
    }

    @Delete('courses/:course/disciplines/:discipline')
    public async deleteDisciplineFromCourse(@Param() params: DeleteDisciplineFromCourseDto, @Res() response: Response) {
        return this.service.deleteDisciplineFromCourse(params.course, params.discipline, response)
    }
}