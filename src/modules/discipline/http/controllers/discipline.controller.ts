import { Body, Controller, Post } from "@nestjs/common";
import { CreateDisciplineDto } from "../dto/create-discipline";
import { DisciplineService } from "../../core/services/discipline.service";

@Controller('disciplines')
export class DisciplineController {
    constructor(private readonly disciplineService: DisciplineService) { }

}