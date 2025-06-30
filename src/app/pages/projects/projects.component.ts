import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl: string;
  repoUrl: string;
  featured?: boolean;
  completionDate: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="projects-hero">
      <div class="container">
        <div class="content">
          <h1 class="title">Mis Proyectos</h1>
          <p class="subtitle">Una muestra de mi trabajo y experiencia</p>
        </div>
      </div>
    </section>

    <section class="projects-filters">
      <div class="container">
        <div class="search-box">
          <input
            type="text"
            [(ngModel)]="searchTerm"
            placeholder="Buscar proyectos..."
            class="search-input"
            (input)="filterProjects()"
          >
          <i class="fas fa-search search-icon"></i>
        </div>

        <div class="filter-categories">
          <button
            class="filter-btn"
            [class.active]="selectedCategory === ''"
            (click)="selectCategory('')"
          >
            Todos
          </button>
          <button
            *ngFor="let category of categories"
            class="filter-btn"
            [class.active]="selectedCategory === category"
            (click)="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <section class="projects-grid">
      <div class="container">
        <div class="grid">
          <div class="project-card"
               *ngFor="let project of filteredProjects"
               [class.expanded]="expandedProject === project.id"
               (click)="toggleProject(project.id)">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="overlay-content">
                  <div class="project-links">
                    <a [href]="project.demoUrl" target="_blank" class="project-link" (click)="$event.stopPropagation()">
                      <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                    <a [href]="project.repoUrl" target="_blank" class="project-link" (click)="$event.stopPropagation()">
                      <i class="fab fa-github"></i> Código
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="completion-date">{{ project.completionDate }}</span>
              </div>

              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>

              <p class="project-description" [class.short]="expandedProject !== project.id">
                {{ expandedProject === project.id && project.longDescription ? project.longDescription : project.description }}
              </p>

              <div class="expand-indicator">
                <span *ngIf="expandedProject !== project.id">Más detalles</span>
                <span *ngIf="expandedProject === project.id">Menos detalles</span>
                <i class="fas" [class.fa-chevron-down]="expandedProject !== project.id" [class.fa-chevron-up]="expandedProject === project.id"></i>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="filteredProjects.length === 0" class="no-results">
          <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>No se encontraron proyectos</h3>
            <p>Intenta con otro término de búsqueda o categoría</p>
            <button class="btn btn-primary" (click)="resetFilters()">Mostrar todos los proyectos</button>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Estoy disponible para nuevos proyectos y colaboraciones. Hablemos sobre cómo puedo ayudarte.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg">Contáctame</a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  searchTerm: string = '';
  selectedCategory: string = '';
  expandedProject: number | null = null;

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Panel de administración para tienda online con estadísticas en tiempo real y gestión de inventario',
      longDescription: 'Panel de administración completo para plataforma de comercio electrónico con funcionalidades avanzadas como análisis de datos en tiempo real, gestión de inventario, procesamiento de pedidos y visualización de métricas. La aplicación incluye autenticación de usuarios, roles y permisos, y está optimizada para dispositivos móviles.',
      image: 'assets/images/projects/project1.jpg',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Chart.js', 'Firebase'],
      category: 'Web App',
      demoUrl: 'https://demo.example.com/project1',
      repoUrl: 'https://github.com/yourusername/project1',
      featured: true,
      completionDate: 'Junio 2023'
    },
    {
      id: 2,
      title: 'App de Gestión de Tareas',
      description: 'Aplicación para organizar tareas con sincronización en la nube y notificaciones',
      longDescription: 'Aplicación completa para gestión de tareas personales y profesionales. Incluye categorización, priorización, recordatorios, y sincronización en tiempo real entre dispositivos. Las notificaciones push mantienen al usuario informado sobre fechas límite próximas. La interfaz intuitiva permite una gestión eficiente mediante drag and drop.',
      image: 'assets/images/projects/project2.jpg',
      tags: ['React', 'Redux', 'Firebase', 'PWA', 'Material UI'],
      category: 'Web App',
      demoUrl: 'https://demo.example.com/project2',
      repoUrl: 'https://github.com/yourusername/project2',
      featured: true,
      completionDate: 'Marzo 2023'
    },
    {
      id: 3,
      title: 'Plataforma Educativa',
      description: 'Sistema de gestión de cursos online con contenido interactivo y seguimiento de progreso',
      longDescription: 'Plataforma completa de e-learning para creación y distribución de cursos online. Incluye sistema de gestión de contenidos, reproductor de video personalizado, cuestionarios interactivos, foros de discusión y certificaciones. El panel de análisis permite a los instructores monitorizar el progreso y participación de los estudiantes.',
      image: 'assets/images/projects/project3.jpg',
      tags: ['Angular', 'Node.js', 'MongoDB', 'WebSockets', 'Express'],
      category: 'Full Stack',
      demoUrl: 'https://demo.example.com/project3',
      repoUrl: 'https://github.com/yourusername/project3',
      featured: true,
      completionDate: 'Octubre 2022'
    },
    {
      id: 4,
      title: 'Aplicación de Clima',
      description: 'App que muestra pronósticos meteorológicos con interfaz minimalista y animaciones',
      longDescription: 'Aplicación meteorológica que proporciona pronósticos detallados para cualquier ubicación. Incluye visualización de datos para temperatura, precipitaciones, viento, humedad y presión atmosférica. Cambios dinámicos en la interfaz según condiciones climáticas y hora del día, con animaciones fluidas y transiciones.',
      image: 'assets/images/projects/project4.jpg',
      tags: ['JavaScript', 'CSS3', 'OpenWeather API', 'Webpack'],
      category: 'API Integration',
      demoUrl: 'https://demo.example.com/project4',
      repoUrl: 'https://github.com/yourusername/project4',
      completionDate: 'Abril 2022'
    },
    {
      id: 5,
      title: 'Sitio Web Corporativo',
      description: 'Sitio web responsive para empresa de servicios con secciones interactivas',
      longDescription: 'Desarrollo del sitio web completo para empresa de publicidad. Diseño moderno con enfoque mobile-first y optimizado para SEO. Incluye integración con CMS para gestión de contenidos, formularios interactivos, animaciones sutiles y velocidad de carga optimizada. La implementación tuvo un impacto directo en la generación de leads para el cliente.',
      image: 'assets/images/projects/project5.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'WordPress'],
      category: 'Sitio Web',
      demoUrl: 'https://demo.example.com/project5',
      repoUrl: 'https://github.com/yourusername/project5',
      completionDate: 'Enero 2022'
    },
    {
      id: 6,
      title: 'Juego HTML5',
      description: 'Videojuego para navegador desarrollado con Canvas y JavaScript',
      longDescription: 'Juego de plataformas desarrollado enteramente con tecnologías web. Implementa un motor de física personalizado, sistema de colisiones, animaciones sprite, efectos de sonido y música. El juego cuenta con múltiples niveles, sistema de puntuación y tablas de clasificación online.',
      image: 'assets/images/projects/project6.jpg',
      tags: ['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'Game Design'],
      category: 'Juego',
      demoUrl: 'https://demo.example.com/project6',
      repoUrl: 'https://github.com/yourusername/project6',
      completionDate: 'Septiembre 2021'
    }
  ];

  filteredProjects: Project[] = [...this.projects];

  get categories(): string[] {
    return [...new Set(this.projects.map(project => project.category))];
  }

  ngOnInit() {
    this.filterProjects();
  }

  filterProjects() {
    this.filteredProjects = this.projects.filter(project => {
      // Filter by search term
      const matchesSearch = this.searchTerm === '' ||
        project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));

      // Filter by category
      const matchesCategory = this.selectedCategory === '' ||
        project.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProjects();
  }

  toggleProject(id: number) {
    if (this.expandedProject === id) {
      this.expandedProject = null;
    } else {
      this.expandedProject = id;
    }
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.filterProjects();
  }
}
