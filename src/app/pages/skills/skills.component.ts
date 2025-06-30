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
  template: `
    <section class="skills-hero">
      <div class="container">
        <div class="content">
          <h1 class="title">Mis Habilidades</h1>
          <p class="subtitle">Tecnologías y herramientas que domino</p>
        </div>
      </div>
    </section>

    <section class="skills-grid">
      <div class="container">
        <div class="skills-container">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <div class="category-header">
              <h2 class="category-title">{{ category.name }}</h2>
              <div class="category-line"></div>
            </div>

            <div class="skills-list">
              <div class="skill-card" *ngFor="let skill of category.skills">
                <div class="skill-icon" [innerHTML]="skill.icon"></div>
                <div class="skill-info">
                  <div class="skill-header">
                    <h3 class="skill-name">{{ skill.name }}</h3>
                    <div class="skill-level">{{ getSkillLevelText(skill.level) }}</div>
                  </div>

                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level"></div>
                  </div>

                  <p class="skill-description" *ngIf="skill.description">
                    {{ skill.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="other-skills">
      <div class="container">
        <h2 class="section-title">Otras Habilidades</h2>

        <div class="other-skills-grid">
          <div class="other-skill-item" *ngFor="let skill of otherSkills">
            <div class="skill-icon" [innerHTML]="skill.icon"></div>
            <h3 class="skill-name">{{ skill.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="education-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Siempre aprendiendo, siempre creciendo</h2>
          <p>
            El desarrollo web es un campo en constante evolución. Por eso me comprometo
            a seguir aprendiendo y mantenerme actualizado con las últimas tecnologías y mejores prácticas.
          </p>
          <a routerLink="/sobre-mi" class="btn btn-primary btn-lg">Conoce más sobre mí</a>
        </div>
      </div>
    </section>
  `,
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
          description: 'Desarrollo de aplicaciones web con Ruby on Rails, RESTful APIs y patrones MVC'
        },
        {
          name: 'Java',
          level: 80,
          icon: '<i class="fas fa-server"></i>',
          description: 'Desarrollo de aplicaciones empresariales con Spring Boot, Hibernate y patrones de diseño'
        },
        {
          name: 'Python',
          level: 70,
          icon: '<i class="fab fa-python"></i>',
          description: 'Desarrollo de scripts, automatización de tareas y aplicaciones web con Django y Flask'
        },
        {
          name: 'Node.js',
          level: 75,
          icon: '<i class="fab fa-node-js"></i>',
          description: 'Desarrollo de aplicaciones backend con Express.js, manejo de eventos y APIs RESTful'
        },
        {
          name: 'PHP',
          level: 80,
          icon: '<i class="fab fa-php"></i>',
          description: 'Desarrollo de aplicaciones web con Laravel, Symfony y manejo de bases de datos MySQL'
        },
        {
          name: 'MongoDB',
          level: 75,
          icon: '<i class="fas fa-database"></i>',
          description: 'Diseño de esquemas, índices, agregaciones y optimización de consultas'
        },
        {
          name: 'PostgreSQL',
          level: 85,
          icon: '<i class="fas fa-database"></i>',
          description: 'Diseño de bases de datos relacionales, consultas avanzadas, optimización de rendimiento y manejo de transacciones'
        },
        {
          name: 'Apache Kafka',
          level: 70,
          icon: '<i class="fas fa-stream"></i>',
          description: 'Implementación de sistemas de mensajería distribuida, manejo de eventos y procesamiento en tiempo real'
        },
        {
          name: 'Redis',
          level: 75,
          icon: '<i class="fas fa-memory"></i>',
          description: 'Uso como base de datos en memoria, caché y sistema de colas'
        },
        {
          name: 'Elasticsearch',
          level: 70,
          icon: '<i class="fas fa-search"></i>',
          description: 'Implementación de búsqueda avanzada, análisis de datos y optimización de rendimiento'
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
          description: 'Desarrollo de aplicaciones web SPA con Angular 12+, utilizando RxJS, NgRx, Angular Material y SSR'
        },
        {
          name: 'React',
          level: 70,
          icon: '<i class="fab fa-react"></i>',
          description: 'Desarrollo de componentes reutilizables, implementación de React Hooks y manejo de estado con Redux'
        },
        {
          name: 'TypeScript',
          level: 70,
          icon: '<i class="fab fa-js"></i>',
          description: 'Programación orientada a objetos, tipos genéricos, interfaces avanzadas y patrones de diseño'
        },
        {
          name: 'CSS/SASS',
          level: 90,
          icon: '<i class="fab fa-sass"></i>',
          description: 'Implementación de diseños responsivos, animaciones, grid layouts y metodología BEM'
        },
        {
          name: 'HTML5',
          level: 95,
          icon: '<i class="fab fa-html5"></i>',
          description: 'Markup semántico, accesibilidad web (WCAG), SEO y buenas prácticas'
        },
        {
          name: 'Hotwre JS',
          level: 95,
          icon: '<i class="fas fa-bolt"></i>',
          description: 'Desarrollo de aplicaciones web interactivas con Hotwire, Turbo y Stimulus para una experiencia de usuario fluida'
        }
      ]
    },
    {
      name: 'DevOps & Herramientas',
      skills: [
        {
          name: 'Git',
          level: 90,
          icon: '<i class="fab fa-git-alt"></i>',
          description: 'Control de versiones, branching strategies, resolución de conflictos y workflows'
        },
        {
          name: 'Docker',
          level: 70,
          icon: '<i class="fab fa-docker"></i>',
          description: 'Contenedorización de aplicaciones, Docker Compose y optimización de imágenes'
        },
        {
          name: 'Postman',
          level: 80,
          icon: '<i class="fas fa-paper-plane"></i>',
          description: 'Pruebas de APIs, manejo de entornos y generación de documentación'
        },
        {
          name: 'Jira',
          level: 75,
          icon: '<i class="fab fa-jira"></i>',
          description: 'Gestión de proyectos ágiles, Scrum, Kanban y seguimiento de tareas'
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
    if (level >= 90) return 'Experto';
    if (level >= 75) return 'Avanzado';
    if (level >= 60) return 'Intermedio';
    if (level >= 40) return 'Básico';
    return 'Principiante';
  }
}
