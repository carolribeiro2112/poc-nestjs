import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: number) {
    const course = this.courses.find((course: Course) => course.id === id);

    if (!course) {
      throw new NotFoundException(`Course id ${id} not found`);
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: number, updateCourseDto: any) {
    const courseExists = this.courses.findIndex(
      (course: Course) => course.id === id,
    );

    this.courses[courseExists] = updateCourseDto;
  }

  remove(id: number) {
    const courseIndex = this.courses.findIndex(
      (course: Course) => course.id === id,
    );
    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1);
    }
  }
}
