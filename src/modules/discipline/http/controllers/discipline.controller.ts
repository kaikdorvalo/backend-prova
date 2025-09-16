import { Body, Controller, Post, Put } from "@nestjs/common";
import { CreateDisciplineDto } from "../dto/create-discipline";
import { DisciplineService } from "../../core/services/discipline.service";
import { UpdateDisciplineNameDto } from "../dto/update-discipline-name.dto";

@Controller('disciplines')
export class DisciplineController {
    constructor(private readonly disciplineService: DisciplineService) { }

    @Put()
    async updateName(@Body() dto: UpdateDisciplineNameDto) {
        return this.disciplineService.updateName(dto.id, dto.name)
    }

}