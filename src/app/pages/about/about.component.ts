import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  isModalOpen: boolean = false;
  selectedJob: any = null;

  workExperience = [
    {
      company: 'Skydropx',
      position: 'Desarrollador FullStack',
      period: '2020 - 2025',
      description: 'Desarrollo de aplicaciones web escalables y optimización de procesos internos. Implementación de nuevas funcionalidades y mantenimiento de la plataforma de logistica.',
      technologies: ['Ruby on Rails', 'Hotwire JS', 'Tailwind', 'React JS', 'Redis', 'PostgreSQL', 'Apache Kafka'],
      achievements: [
        'Desarrollé el núcleo del módulo de rastreo, pieza central para el seguimiento de envíos',
        'Implementé una nueva interfaz de usuario utilizando Tailwind CSS y Hotwire JS que mejoró el tiempo de carga un 40%',
        'Optimicé consultas SQL complejas reduciendo el tiempo de respuesta en un 60%',
        'Desarrollé integraciones con múltiples proveedores de logística mediante APIs REST',
        'Participé activamente en revisiones de código y procesos de integración continua'
      ],
      responsibilities: 'Desarrollo de características frontend y backend, optimización de rendimiento, integración de APIs, resolución de bugs críticos y mantenimiento de la plataforma.',
      url: 'https://www.skydropx.com'
    },
    {
      company: 'Homie',
      position: 'Desarrollador FullStack',
      period: '2018 - 2020',
      description: 'Desarrollo de aplicaciones web para gestión de propiedades. Implementación de nuevas características y optimización del rendimiento de la aplicación.',
      technologies: ['Ruby on Rails', 'Angular JS', 'React JS', 'MongoDB', 'Elasticsearch', 'Redis'],
      achievements: [
        'Desarrollé un sistema de búsqueda avanzada de propiedades utilizando Elasticsearch, mejorando la relevancia y velocidad de resultados en un 80%',
        'Implementé nuevos endpoints API para integrar el frontend con el backend en el wizard de registro de propiedades',
        'Automatización de correos para notificar a inquilinos y propietarios sobre nuevos eventos en tiempo real',
        'Diseñé y desarrollé la lógica para el cálculo dinámico de precios de renta y comisiones, adaptado a cada tipo de usuario'
      ],
      responsibilities: 'Desarrollo de funcionalidades, optimización de consultas en MongoDB, implementación de interfaces de usuario con Angular y React, integración de servicios de terceros.',
      url: 'https://www.homie.mx'
    },
    {
      company: 'Aitelecom',
      position: 'Desarrollador FullStack',
      period: '2016 - 2018',
      description:  'Desarrollo de aplicaciones web para gestión de telecomunicaciones. Implementación de nuevas funcionalidades y mantenimiento de la plataforma de tickets.',
      technologies: ['Java', 'Spring Boot','Javascript', 'Python', 'Yii', 'HTML5', 'CSS3', 'Bootstrap'],
      achievements: [
        'Desarrollé un sistema de gestión de tickets que redujo el tiempo de resolución de incidencias en un 50%',
        'Actualicé la plataforma de gestión de telecomunicaciones con un nuevo diseño responsivo utilizando Bootstrap',
        'Integracion de plataforma de rastreo de embarcaciones por satelite',
        'Actualización de sistema de streaming de videos para clientes',
      ],
      responsibilities: 'Desarrollo de sistemas web, implementación de APIs RESTful, mantenimiento de aplicaciones existentes, creación de reportes y dashboards.',
      url: 'https://www.aitelecom.net'
    },
    {
      company: 'Idetek',
      position: 'Desarrollador Web',
      period: '2015 - 2016',
      description: 'Desarrollo de sitio web y aplicaciones para clientes locales. Implementación de soluciones personalizadas y mantenimiento de sitio',
      technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Laravel', 'MySQL'],
      achievements: [
        'Creé un sitio web corporativo para una empresa local que incrementó su visibilidad en línea',
        'Desarrollé un CMS personalizado para gestión de contenidos de sitios web',
        'Mejoré la velocidad de carga de sitios web optimizando imágenes y recursos estáticos',
        'Proporcioné soporte técnico y mantenimiento continuo'
      ],
      responsibilities: 'Diseño y desarrollo de sitio web, implementación de soluciones personalizadas, soporte interno.',
      url: 'https://www.idetek.com.mx'
    }
  ];

  education = [
    {
      degree: 'Ingeniero en sistemas computacionales',
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

  openJobDetails(job: any): void {
    this.selectedJob = job;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    setTimeout(() => {
      this.selectedJob = null;
    }, 300);
  }
}
