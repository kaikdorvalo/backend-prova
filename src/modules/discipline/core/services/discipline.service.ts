import { Injectable } from "@nestjs/common";
import { Discipline } from "../../persistence/schemas/discipline.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateDisciplineDto } from "../../http/dto/create-discipline";
import { CourseService } from "src/modules/course/core/services/course.service";

@Injectable()
export class DisciplineService {
    constructor(
        @InjectModel(Discipline.name) private disciplineModel: Model<Discipline>,
        private readonly courseService: CourseService
    ) { }

    public async create(name: string, courseId: string) {
        return await this.disciplineModel.create({ name, course: courseId })
    }

    public async deleteMany(courseId: ObjectId) {
        return await this.disciplineModel.deleteMany({ course: courseId })
    }

    public async updateName(id: string, name: string) {
        return await this.disciplineModel.updateOne({ _id: id }, { name: name })
    }

    public async getById(id: string) {
        return await this.disciplineModel.findById(id)
    }
}