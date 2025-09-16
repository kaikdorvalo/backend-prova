import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './modules/course/course.module';
import { DisciplineModule } from './modules/discipline/discipline.module';
import { CourseDisciplineModule } from './modules/course-discipline/course-discipline.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/prova-1b'), CourseModule, DisciplineModule, CourseDisciplineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
