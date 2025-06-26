import { api } from '../api/api';

export interface Course {
  id: number;
  name: string;
  description?: string;
  start_date: string;
  end_date: string;
  creator_id: number;
  instructors: number[];
}

export const getCoursesByUser = async (userId: number): Promise<Course[]> => {
  const response = await api.get<Course[]>('/courses', {
    params: {
      q: userId
    }
  });
  return response.data.filter(
    (course) => course.creator_id === userId || (Array.isArray(course.instructors) && course.instructors.includes(userId))
  );
};
