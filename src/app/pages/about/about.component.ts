import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  workExperience = [
    {
      company: 'Skydropx',
      position: 'Desarrollador FullStack',
      period: '2022 - Presente',
      description: 'Desarrollo de aplicaciones web escalables y optimización de procesos internos. Implementación de nuevas funcionalidades y mantenimiento de la plataforma existente.',
      technologies: ['Ruby on Rails', 'Hotwire JS', 'Tailwind', 'React JS', 'PostgreSQL', 'Apache Kafka']
    },
    {
      company: 'Homie',
      position: 'Desarrollador FullStack',
      period: '2019 - 2022',
      description: 'Desarrollo de aplicaciones web para gestión de propiedades. Implementación de nuevas características y optimización del rendimiento de la aplicación.',
      technologies: ['Ruby on Rails', 'Angular JS', 'React JS', 'MongoDB', 'Elasticsearch', 'Redis']
    },
    {
      company: 'Aitelecom',
      position: 'Desarrollador FullStack',
      period: '2017 - 2019',
      description:  'Desarrollo de aplicaciones web para gestión de telecomunicaciones. Implementación de nuevas funcionalidades y mantenimiento de la plataforma de tickets.',
      technologies: ['Java', 'Spring Boot','Javascript', 'Python', 'Yii', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      company: 'Idetek',
      position: 'Desarrollador Web',
      period: '2015 - 2017',
      description: 'Desarrollo de sitio web y aplicaciones para clientes locales. Implementación de soluciones personalizadas y mantenimiento de sitio',
      technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Laravel', 'MySQL']
    }
  ];

  education = [
    {
      degree: 'Ingeniero en sistamas computacionales',
      institution: 'Universidad Autonoma de Campeche',
      period: '2011 - 2016',
      description: 'Formación en desarrollo de software, bases de datos, redes y sistemas operativos. Participación en proyectos académicos y prácticas profesionales.'
    },
    {
      degree: 'Técnico en computación administrativa',
      institution: 'Centro de Estudios Tecnicos en Computacion de Campeche S.C.',
      period: '2004 - 2005',
      description: 'Formación técnica enfocada en el uso de herramientas informáticas, administración de sistemas y soporte técnico. Aprendizaje de lenguajes de programación básicos y desarrollo web inicial.'
    }
  ];
}
