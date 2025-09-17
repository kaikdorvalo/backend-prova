import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Course } from "../../persistence/schemas/course.schema";
import { Model, ObjectId } from "mongoose";
import { CreateCourseDto } from "../../http/dto/create-course.dto";
import { UpdateCourseNameDto } from "../../http/dto/update-course-name.dto";

@Injectable()
export class CourseService {
    constructor(
        @InjectModel(Course.name) private courseModel: Model<Course>
    ) { }

    public async getAll() {
        return await this.courseModel.find().populate("disciplines")
    }

    public async createCourse(dto: CreateCourseDto) {
        return await this.courseModel.create(dto)
    }

    public async getByID(id: string) {
        return await this.courseModel.findById(id)
    }

    public async deleteById(id: ObjectId) {
        return await this.courseModel.findByIdAndDelete(id)
    }

    public async update(id: string, dto: UpdateCourseNameDto) {
        return await this.courseModel.findByIdAndUpdate(id, { name: dto.name, workload: dto.workload, startDate: dto.startDate })
    }

    public async addDiscipline(id: string, disciplineId: ObjectId) {
        return await this.courseModel.updateOne({ _id: id }, { $push: { disciplines: disciplineId } })
    }

    public async getCourseWithDisciplines(id: string) {
        return await this.courseModel.findById(id).populate("disciplines")
    }

    public async removeDiscipline(courseId: string, disciplineId: string) {
        return this.courseModel.updateOne({ _id: courseId }, { $pull: { disciplines: disciplineId } })
    }
}