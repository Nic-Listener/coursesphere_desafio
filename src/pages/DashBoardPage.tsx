import React, { useEffect, useState } from 'react';
import { Course, getCoursesByUser } from '../services/CourseService';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      if (!user) return;
      try {
        const coursesData = await getCoursesByUser(user.id);
        setCourses(coursesData);
      } catch (err) {
        setError('Erro ao carregar cursos');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user]);

  if (loading) return <p>Carregando cursos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard - Meus Cursos</h2>

      {courses.length === 0 ? (
        <p>Você ainda não tem cursos.</p>
      ) : (
        <div style={{ display: 'grid', gap: '16px' }}>
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
              }}
            >
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <p>
                Início: {course.start_date} | Fim: {course.end_date}
              </p>
              <button>Ver detalhes</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
