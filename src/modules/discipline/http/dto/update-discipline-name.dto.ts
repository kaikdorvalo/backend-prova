import { IsNotEmpty, IsString } from "class-validator"

export class UpdateDisciplineNameDto {

    @IsString()
    @IsNotEmpty()
    id: string

    @IsNotEmpty()
    @IsString()
    name: string
}