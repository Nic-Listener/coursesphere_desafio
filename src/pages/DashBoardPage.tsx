import React, { useEffect, useState } from 'react';

interface Course {
  id: number;
  name: string;
  description?: string;
  start_date: string;
  end_date: string;
}

const mockCourses: Course[] = [
  {
    id: 1,
    name: 'Curso de React',
    description: 'Aprenda React com projetos práticos.',
    start_date: '2025-07-01',
    end_date: '2025-08-30',
  },
  {
    id: 2,
    name: 'Curso de Node.js',
    description: 'Backend com Node.js e Express.',
    start_date: '2025-07-05',
    end_date: '2025-09-01',
  },
];

const DashboardPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Simula chamada a API
    const fetchCourses = async () => {
      // Aqui depois trocaremos pelo Axios chamando o JSON Server
      setCourses(mockCourses);
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard - Meus Cursos</h2>

      {courses.length === 0 ? (
        <p>Nenhum curso disponível.</p>
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
