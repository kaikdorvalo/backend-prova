import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Response } from "express";
import { CourseService } from "src/modules/course/core/services/course.service";
import { DisciplineService } from "src/modules/discipline/core/services/discipline.service";
import { CreateDisciplineDto } from "src/modules/discipline/http/dto/create-discipline";

@Injectable()
export class CourseDisciplineService {
    constructor(
        private readonly courseService: CourseService,
        private readonly disciplineService: DisciplineService
    ) { }

    public async createDiscipline(dto: CreateDisciplineDto, response: Response) {
        const course = await this.courseService.getByID(dto.id)
        if (course) {
            const discipline = await this.disciplineService.create(dto.name, dto.id)
            await this.courseService.addDiscipline(dto.id, discipline._id)

            return response.status(HttpStatus.NO_CONTENT).send()
        }
    }

    public async deleteCourseById(id: string, response: Response) {
        const course = await this.courseService.getByID(id)
        if (course) {
            await this.disciplineService.deleteMany(course._id)
            await this.courseService.deleteById(course._id)
            return response.status(HttpStatus.NO_CONTENT).send()
        }

        throw new NotFoundException()
    }

    public async deleteDisciplineFromCourse(course: string, discipline: string, response: Response) {
        const foundCourse = await this.courseService.getCourseWithDisciplines(course)
        const foundDiscipline = await this.disciplineService.getById(discipline)

        if (!foundCourse || !foundDiscipline) {
            return response.status(HttpStatus.NOT_FOUND).send()
        }

        if (foundCourse.disciplines.find((disc) => disc._id == foundDiscipline.id)) {
            await this.courseService.removeDiscipline(course, discipline)
            return response.status(HttpStatus.NO_CONTENT).send()
        }

        return response.status(HttpStatus.NOT_FOUND).send()
    }
}