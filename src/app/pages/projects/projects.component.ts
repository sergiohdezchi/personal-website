import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  searchTerm: string = '';
  selectedCategory: string = '';
  expandedProject: number | null = null;

  projects: Project[] = [
    {
      id: 1,
      title: 'Weather App',
      description: $localize `Aplicación web del clima con backend en Rails y frontend moderno en React.`,
      longDescription: $localize `Weather App es una solución full stack que permite consultar el clima actual y pronósticos por ciudad. El backend está desarrollado en Ruby on Rails con PostgreSQL, Redis y autenticación OAuth 2.0 (Doorkeeper + Devise). El frontend usa React, TypeScript, Material UI y Redux Toolkit, optimizado con Vite. El sistema está dockerizado y se conecta a la API de OpenWeather.`,
      image: 'images/projects/weather-app.png',
      tags: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Devise', 'Doorkeeper', 'React', 'TypeScript', 'Material UI', 'Redux Toolkit', 'Vite', 'Docker', 'OpenWeather API', 'OAuth 2.0'],
      category: 'Full Stack App',
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/weather-app',
      featured: true,
      completionDate: ''
    },
    {
      id: 2,
      title: 'Invoice App',
      description: $localize `Frontend en Angular para la gestión de facturación digital.`,
      longDescription: $localize `Invoice App es una aplicación de frontend desarrollada con Angular, TypeScript y Angular Material, diseñada para integrarse con una API personalizada. Permite a los usuarios crear, visualizar y administrar facturas de manera eficiente, con una interfaz intuitiva y responsiva.`,
      image: 'images/projects/invoice-app.png',
      tags: ['Angular', 'TypeScript', 'Angular Material'],
      category: 'Frontend App',
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/invoice-app',
      featured: false,
      completionDate: ''
    },
    {
      id: 3,
      title: 'Invoice API',
      description: $localize `API REST para la gestión de facturas con autenticación y procesamiento en background.`,
      longDescription: $localize `Invoice API es un backend en Ruby on Rails que expone una API REST para manejar operaciones relacionadas con facturación electrónica. Usa PostgreSQL como base de datos, Redis como almacenamiento de caché y Sidekiq para procesamiento de tareas asíncronas. Incluye autenticación, validaciones y está preparado para integrarse con frontend externos.`,
      image: 'images/projects/invoice-app.png',
      tags: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq'],
      category: 'API',
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/invoice-api',
      featured: false,
      completionDate: ''
    },
    {
      id: 4,
      title: 'Orders Service',
      description: $localize `Microservicio en Java para la gestión de pedidos, con mensajería y arquitectura escalable.`,
      longDescription: $localize `Orders Service es un microservicio backend desarrollado en Java con Spring Boot. Implementa seguridad con JWT, persistencia en MongoDB, mensajería asíncrona con Apache Kafka y contenedorización con Docker Compose. Utiliza Maven como herramienta de construcción y sigue una arquitectura moderna enfocada en microservicios.`,
      image: 'images/projects/orders-api.png',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MongoDB', 'Apache Kafka', 'Maven', 'Docker Compose'],
      category: 'Microservice',
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/orders-service',
      featured: false,
      completionDate: ''
    },
    {
      id: 5,
      title: 'Restaurant Reservation App',
      description: $localize `Aplicación web de reservas de restaurante con frontend moderno en Angular.`,
      longDescription: $localize `Aplicación SPA desarrollada en Angular que permite a los usuarios explorar menús, seleccionar horarios disponibles y realizar reservas en línea. Integra pagos vía PayPal y ofrece una experiencia fluida con RxJS, SCSS y Material UI. Funciona junto con una API REST creada en Java Spring Boot para manejar autenticación y persistencia.`,
      image: 'images/projects/restaurant-reservation-app.png',
      tags: ['Angular', 'TypeScript', 'Material UI', 'RxJS', 'SCSS', 'PayPal'],
      category: 'Frontend App',
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/restaurant-reservation-app',
      featured: false,
      completionDate: ''
    },
    {
      id: 6,
      title: 'Restaurant Reservation API',
      description: $localize `API RESTful en Java Spring Boot para gestión de reservas y pagos.`,
      longDescription: $localize `API desarrollada con Java Spring Boot para manejar la lógica de reservas de un restaurante, autenticación JWT, control de usuarios, validaciones y pagos con PayPal. Utiliza PostgreSQL como base de datos, está documentada con Swagger y construida con Maven. Incluye seguridad con Spring Security.`,
      image: 'images/projects/restaurant-reservation-app.png',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'PayPal', 'Maven', 'Swagger'],
      category: 'Backend API',
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/restaurant-reservation-api',
      featured: false,
      completionDate: ''
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
