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
      title: 'Weather App',
      description: $localize `Aplicación web del clima con backend en Rails y frontend moderno en React.`,
      image: 'images/projects/weather-app.png',
      tags: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Devise', 'Doorkeeper', 'React', 'TypeScript', 'Material UI', 'Redux Toolkit', 'Vite', 'Docker', 'OpenWeather API', 'OAuth 2.0'],
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/weather-app'
    },
    {
      title: 'Invoice App',
      description: $localize `Frontend en Angular para la gestión de facturación digital.`,
      image: 'images/projects/invoice-app.png',
      tags: ['Angular', 'TypeScript', 'Angular Material'],
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/invoice-app'
    },
    {
      title: 'Restaurant Reservation App',
      description: $localize `Aplicación web de reservas de restaurante con frontend moderno en Angular.`,
      image: 'images/projects/restaurant-reservation-app.png',
      tags: ['Angular', 'TypeScript', 'Material UI', 'RxJS', 'SCSS', 'PayPal'],
      demoUrl: '',
      repoUrl: 'https://github.com/sergiohdezchi/restaurant-reservation-app'
    },
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
      name: $localize `Herramientas`,
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
