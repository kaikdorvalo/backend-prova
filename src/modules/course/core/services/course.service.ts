import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Course } from "../../persistence/schemas/course.schema";
import { Model, ObjectId } from "mongoose";
import { CreateCourseDto } from "../../http/dto/create-course.dto";

@Injectable()
export class CourseService {
    constructor(
        @InjectModel(Course.name) private courseModel: Model<Course>
    ) { }

    public async createCourse(dto: CreateCourseDto) {
        return await this.courseModel.create(dto)
    }

    public async getByID(id: string) {
        return await this.courseModel.findById(id)
    }

    public async deleteById(id: ObjectId) {
        return await this.courseModel.findByIdAndDelete(id)
    }

    public async updateName(id: string, name: string) {
        return await this.courseModel.findByIdAndUpdate(id, { name })
    }

    public async addDiscipline(id: string, disciplineId: ObjectId) {
        return await this.courseModel.updateOne({ _id: id }, { $push: { disciplines: disciplineId } })
    }

    public async getCourseWithDisciplines(id: string) {
        return await this.courseModel.findById(id).populate("disciplines")
    }
}