import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos Nest JS',
      description: 'Fundamentos Nest JS',
      tags: ['node.js', 'nestjs', 'javascript', 'back-end'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course: Course) => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const courseExists = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    this.courses[courseExists] = updateCourseDto;
  }

  remove(id: string) {
    const courseIndex = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );
    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1);
    }
  }
}
