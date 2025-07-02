import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
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
