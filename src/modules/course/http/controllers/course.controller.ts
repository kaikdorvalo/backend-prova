import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CourseService } from "../../core/services/course.service";
import { UpdateCourseNameDto } from "../dto/update-course-name.dto";
import { CourseIdDto } from "../dto/course-id.dto";
import { CreateCourseDto } from "../dto/create-course.dto";

@Controller('courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Get('/:id')
    public async getCourseById(@Param() params: CourseIdDto) {
        return this.courseService.getByID(params.id)
    }

    @Get('/:id/disciplines')
    public async getCourseWithDisciplines(@Param() params: CourseIdDto) {
        return this.courseService.getCourseWithDisciplines(params.id)
    }

    @Post()
    public async createCourse(@Body() dto: CreateCourseDto) {
        return this.courseService.createCourse(dto)
    }

    @Put('/:id')
    public async updateCourseName(@Param() params: CourseIdDto, @Body() dto: UpdateCourseNameDto) {
        return this.courseService.updateName(params.id, dto.name)
    }
}
