import { IsNotEmpty, IsString } from "class-validator";

export class CourseIdDto {
    @IsString()
    @IsNotEmpty()
    id: string
}