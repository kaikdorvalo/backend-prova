import { IsNotEmpty, IsString } from "class-validator";

export class CreateDisciplineDto {

    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsNotEmpty()
    name: string
}