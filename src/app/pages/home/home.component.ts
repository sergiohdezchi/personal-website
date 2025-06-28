import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="container">
        <div class="content">
          <h1 class="title" @fadeInUp>
            <span class="greeting">Hola, soy</span>
            <span class="name">Sergio Manuel Hernandez Chi</span>
            <span class="profession">Desarrollador Web</span>
          </h1>

          <p class="description" @fadeInUp>
            Transformando ideas en experiencias digitales impactantes.
            Software Engineer especializado en Ruby, Java, Angular y React.
          </p>

          <div class="cta-buttons" @fadeInUp>
            <a routerLink="/proyectos" class="btn btn-primary">Ver Proyectos</a>
            <a routerLink="/contacto" class="btn btn-outline">Contactar</a>
          </div>

          <div class="social-links" @fadeInUp>
            <a href="https://github.com/sergiohdezchi" target="_blank" class="social-link">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sergio-manuel-hernandez-chi-712629128" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/SergihdezC" target="_blank" class="social-link">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div class="hero-image" @fadeInRight>
          <!-- Puedes reemplazar esto con tu propia imagen -->
          <div class="image-container">
            <div class="blob"></div>
            <div class="portrait"><img class="image-profile" src="images/profile.jpg" alt="Foto de perfil"></div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <span>Desliza</span>
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>

    <section class="featured-projects">
      <div class="container">
        <h2 class="section-title" @fadeInUp>Proyectos Destacados</h2>

        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of featuredProjects; let i = index" @cardAnimation>
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
              <div class="project-links">
                <a [href]="project.demoUrl" target="_blank" class="project-link">Demo</a>
                <a [href]="project.repoUrl" target="_blank" class="project-link">Código</a>
              </div>
            </div>
          </div>
        </div>

        <div class="cta-center">
          <a routerLink="/proyectos" class="btn btn-primary">Ver todos los proyectos</a>
        </div>
      </div>
    </section>

    <section class="skills">
      <div class="container">
        <h2 class="section-title" @fadeInUp>Mis Habilidades</h2>

        <div class="skills-container">
          <div class="skill-category" *ngFor="let category of skillCategories" @fadeInUp>
            <h3 class="category-title">{{ category.name }}</h3>
            <ul class="skill-list">
              <li class="skill-item" *ngFor="let skill of category.skills" @skillAnimation>
                <div class="skill-icon" [innerHTML]="skill.icon"></div>
                <span class="skill-name">{{ skill.name }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="cta-center">
          <a routerLink="/habilidades" class="btn btn-primary">Ver todas mis habilidades</a>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="container">
        <div class="cta-content" @fadeInUp>
          <h2 class="section-title">¿Interesado en trabajar juntos?</h2>
          <p class="cta-description">
            Estoy disponible para trabajos freelance, proyectos interesantes o discutir oportunidades laborales.
          </p>
          <a routerLink="/contacto" class="btn btn-primary btn-lg">Contáctame</a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)'
        }),
        animate('600ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(30px)'
        }),
        animate('600ms 300ms ease-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ])
    ]),
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateY(30px)'
          }),
          stagger(100, [
            animate('600ms ease-out', style({
              opacity: 1,
              transform: 'translateY(0)'
            }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('skillAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-15px)'
        }),
        animate('400ms ease-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  featuredProjects = [
    {
      title: 'E-commerce Dashboard',
      description: 'Panel de administración para tienda online con estadísticas en tiempo real y gestión de inventario',
      image: 'assets/images/projects/project1.jpg',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Chart.js'],
      demoUrl: 'https://demo.example.com/project1',
      repoUrl: 'https://github.com/yourusername/project1'
    },
    {
      title: 'App de Tareas',
      description: 'Aplicación para organizar tareas con sincronización en la nube y notificaciones',
      image: 'assets/images/projects/project2.jpg',
      tags: ['React', 'Redux', 'Firebase', 'PWA'],
      demoUrl: 'https://demo.example.com/project2',
      repoUrl: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Plataforma Educativa',
      description: 'Sistema de gestión de cursos online con contenido interactivo y seguimiento de progreso',
      image: 'assets/images/projects/project3.jpg',
      tags: ['Angular', 'Node.js', 'MongoDB', 'WebSockets'],
      demoUrl: 'https://demo.example.com/project3',
      repoUrl: 'https://github.com/yourusername/project3'
    }
  ];

  skillCategories = [
    {
      name: 'Backend',
      skills: [
        { name: 'Ruby', icon: '<i class="fas fa-gem"></i>' },
        { name: 'Java', icon: '<i class="fas fa-server"></i>' },
        { name: 'MongoDB', icon: '<i class="fas fa-database"></i>' },
        { name: 'PostgreSQL', icon: '<i class="fas fa-database"></i>' },
        { name: 'Apache Kafka', icon: '<i class="fas fa-stream"></i>' },
        { name: 'Redis', icon: '<i class="fas fa-memory"></i>' },
        { name: 'Elasticsearch', icon: '<i class="fas fa-search"></i>' }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', icon: '<i class="fab fa-angular"></i>' },
        { name: 'React', icon: '<i class="fab fa-react"></i>' },
        { name: 'TypeScript', icon: '<i class="fab fa-js"></i>' },
        { name: 'SASS', icon: '<i class="fab fa-sass"></i>' },
        { name: 'HTML5', icon: '<i class="fab fa-html5"></i>' },
        { name: 'Hotwire JS', icon: '<i class="fas fa-bolt"></i>' }
      ]
    },
    {
      name: 'Herramientas',
      skills: [
        { name: 'Git', icon: '<i class="fab fa-git-alt"></i>' },
        { name: 'Docker', icon: '<i class="fab fa-docker"></i>' },
        { name: 'Postman', icon: '<i class="fas fa-paper-plane"></i>' },
        { name: 'Jira', icon: '<i class="fab fa-jira"></i>' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Animation initialization could go here
  }
}
