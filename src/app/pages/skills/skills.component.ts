import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  description?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Backend',
      skills: [
        {
          name: 'Ruby',
          level: 90,
          icon: '<i class="fa-regular fa-gem"></i>',
          description: $localize `Desarrollo de aplicaciones web con Ruby on Rails, RESTful APIs, patrones MVC y microservicios`
        },
        {
          name: 'Java',
          level: 80,
          icon: '<i class="fas fa-server"></i>',
          description: $localize `Desarrollo de aplicaciones empresariales con Spring Boot, Hibernate y patrones de diseño`
        },
        {
          name: 'Python',
          level: 70,
          icon: '<i class="fab fa-python"></i>',
          description: $localize `Desarrollo de scripts, automatización de tareas y aplicaciones web con Django`
        },
        {
          name: 'Node.js',
          level: 70,
          icon: '<i class="fab fa-node-js"></i>',
          description: $localize `Desarrollo de aplicaciones backend con Express.js y APIs RESTful`
        },
        {
          name: 'PHP',
          level: 80,
          icon: '<i class="fab fa-php"></i>',
          description: $localize `Desarrollo de aplicaciones web con Laravel, Yii y manejo de bases de datos MySQL`
        },
        {
          name: 'MongoDB',
          level: 75,
          icon: '<i class="fas fa-database"></i>',
          description: $localize `Diseño de bases de datos NoSQL y consultas avanzadas`
        },
        {
          name: 'PostgreSQL',
          level: 85,
          icon: '<i class="fas fa-database"></i>',
          description: $localize `Diseño de bases de datos relacionales, consultas avanzadas, optimización de rendimiento y manejo de transacciones`
        },
        {
          name: 'Apache Kafka',
          level: 80,
          icon: '<i class="fas fa-stream"></i>',
          description: $localize `Implementación de sistemas de mensajería distribuida, manejo de eventos y procesamiento en tiempo real`
        },
        {
          name: 'Redis',
          level: 75,
          icon: '<i class="fas fa-memory"></i>',
          description: $localize `Uso de caché y sistema de colas para mejorar el rendimiento de aplicaciones web`
        },
        {
          name: 'Elasticsearch',
          level: 60,
          icon: '<i class="fas fa-search"></i>',
          description: $localize `Implementación de búsqueda avanzada, análisis de datos y optimización de rendimiento`
        }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        {
          name: 'Angular',
          level: 70,
          icon: '<i class="fab fa-angular"></i>',
          description: $localize `Desarrollo de aplicaciones web SPA con Angular 12+, utilizando RxJS, NgRx, Angular Material y SSR`
        },
        {
          name: 'React',
          level: 70,
          icon: '<i class="fab fa-react"></i>',
          description: $localize `Desarrollo de componentes reutilizables, implementación de React Hooks y manejo de estado con Redux`
        },
        {
          name: 'TypeScript',
          level: 70,
          icon: '<i class="fab fa-js"></i>',
          description: $localize `Programación orientada a objetos, tipos genéricos, interfaces y patrones de diseño`
        },
        {
          name: 'CSS/SASS',
          level: 90,
          icon: '<i class="fab fa-sass"></i>',
          description: $localize `Implementación de diseños responsivos, animaciones y grid layouts`
        },
        {
          name: 'HTML5',
          level: 90,
          icon: '<i class="fab fa-html5"></i>',
          description: $localize `Estructuración semántica de documentos, formularios avanzados y accesibilidad web`
        },
        {
          name: 'Hotwre JS',
          level: 70,
          icon: '<i class="fas fa-bolt"></i>',
          description: $localize `Desarrollo de aplicaciones web interactivas con Hotwire, Turbo y Stimulus para una experiencia de usuario fluida`
        }
      ]
    },
    {
      name: $localize `DevOps & Herramientas`,
      skills: [
        {
          name: 'Git',
          level: 90,
          icon: '<i class="fab fa-git-alt"></i>',
          description: $localize `Control de versiones, ramas, merges y flujos de trabajo colaborativos`
        },
        {
          name: 'Docker',
          level: 70,
          icon: '<i class="fab fa-docker"></i>',
          description: $localize `Contenedorización de aplicaciones, Docker Compose`
        },
        {
          name: 'Postman',
          level: 80,
          icon: '<i class="fas fa-paper-plane"></i>',
          description: $localize `Pruebas de APIs, manejo de entornos y generación de documentación`
        },
        {
          name: 'Jira',
          level: 80,
          icon: '<i class="fab fa-jira"></i>',
          description: $localize `Gestión de proyectos ágiles, Scrum y seguimiento de tareas`
        }
      ]
    }
  ];

  otherSkills = [
    { name: 'Scrum', icon: '<i class="fas fa-users"></i>' },
    { name: 'SEO', icon: '<i class="fas fa-search"></i>' },
    { name: 'Responsive Design', icon: '<i class="fas fa-tablet-alt"></i>' },
    { name: 'Web Performance', icon: '<i class="fas fa-tachometer-alt"></i>' }
  ];

  getSkillLevelText(level: number): string {
    if (level >= 90) return $localize `Experto`;
    if (level >= 75) return $localize `Avanzado`;
    if (level >= 60) return $localize `Intermedio`;
    if (level >= 40) return $localize `Básico`;
    return $localize `Principiante`;
  }
}
