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
      period: '2022 - 2025',
      description: 'Desarrollo de aplicaciones web escalables y optimización de procesos internos. Implementación de nuevas funcionalidades y mantenimiento de la plataforma existente.',
      technologies: ['Ruby on Rails', 'Hotwire JS', 'Tailwind', 'React JS', 'PostgreSQL', 'Apache Kafka'],
      achievements: [
        'Lideré la migración de una aplicación monolítica a una arquitectura de microservicios',
        'Implementé una nueva interfaz de usuario utilizando Tailwind CSS y Hotwire JS que mejoró el tiempo de carga un 40%',
        'Optimicé consultas SQL complejas reduciendo el tiempo de respuesta en un 60%',
        'Desarrollé integraciones con múltiples proveedores de logística mediante APIs REST'
      ],
      responsibilities: 'Desarrollo de características frontend y backend, optimización de rendimiento, integración de APIs, resolución de bugs críticos y mantenimiento de la plataforma.',
      url: 'https://www.skydropx.com'
    },
    {
      company: 'Homie',
      position: 'Desarrollador FullStack',
      period: '2019 - 2022',
      description: 'Desarrollo de aplicaciones web para gestión de propiedades. Implementación de nuevas características y optimización del rendimiento de la aplicación.',
      technologies: ['Ruby on Rails', 'Angular JS', 'React JS', 'MongoDB', 'Elasticsearch', 'Redis'],
      achievements: [
        'Desarrollé un sistema de búsqueda avanzada de propiedades con Elasticsearch que mejoró la relevancia de resultados en un 50%',
        'Implementé un sistema de mensajería en tiempo real para la comunicación entre inquilinos y propietarios',
        'Rediseñé el panel de administración utilizando React y Material UI',
        'Optimicé el rendimiento del backend reduciendo el tiempo de carga promedio en un 35%'
      ],
      responsibilities: 'Desarrollo de funcionalidades, optimización de consultas en MongoDB, implementación de interfaces de usuario con Angular y React, integración de servicios de terceros.',
      url: 'https://www.homie.mx'
    },
    {
      company: 'Aitelecom',
      position: 'Desarrollador FullStack',
      period: '2017 - 2019',
      description:  'Desarrollo de aplicaciones web para gestión de telecomunicaciones. Implementación de nuevas funcionalidades y mantenimiento de la plataforma de tickets.',
      technologies: ['Java', 'Spring Boot','Javascript', 'Python', 'Yii', 'HTML5', 'CSS3', 'Bootstrap'],
      achievements: [
        'Desarrollé un sistema de gestión de tickets que redujo el tiempo de resolución en un 30%',
        'Implementé un panel de control para monitorear el rendimiento de los servicios en tiempo real',
        'Automaticé procesos de generación de reportes reduciendo el tiempo de trabajo manual en un 75%',
        'Desarrollé APIs REST para integrar sistemas internos'
      ],
      responsibilities: 'Desarrollo de sistemas web, implementación de APIs RESTful, mantenimiento de aplicaciones existentes, creación de reportes y dashboards.',
      url: 'https://www.aitelecom.net'
    },
    {
      company: 'Idetek',
      position: 'Desarrollador Web',
      period: '2015 - 2017',
      description: 'Desarrollo de sitio web y aplicaciones para clientes locales. Implementación de soluciones personalizadas y mantenimiento de sitio',
      technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Laravel', 'MySQL'],
      achievements: [
        'Creé más de 20 sitios web personalizados para clientes locales',
        'Desarrollé un CMS personalizado para gestión de contenidos de sitios web',
        'Implementé sistema de ecommerce para tiendas locales',
        'Optimicé el rendimiento de bases de datos MySQL para aplicaciones de alto tráfico'
      ],
      responsibilities: 'Diseño y desarrollo de sitios web, implementación de soluciones personalizadas, mantenimiento de sitios existentes, soporte a clientes.',
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
    }, 300); // Esperar a que termine la animación del modal
  }
}
