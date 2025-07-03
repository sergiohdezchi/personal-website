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
      position: $localize `Desarrollador FullStack`,
      period: '2020 - 2025',
      description: $localize `Desarrollo de aplicaciones web escalables y optimización de procesos internos. Implementación de nuevas funcionalidades y mantenimiento de la plataforma de logistica.`,
      technologies: ['Ruby on Rails', 'Hotwire JS', 'Tailwind', 'React JS', 'Redis', 'PostgreSQL', 'Apache Kafka'],
      achievements: [
        $localize `Desarrollé el núcleo del módulo de rastreo, pieza central para el seguimiento de envíos`,
        $localize `Implementé una nueva interfaz de usuario utilizando Tailwind CSS y Hotwire JS que mejoró el tiempo de carga`,
        $localize `Optimicé consultas SQL complejas reduciendo el tiempo de respuesta`,
        $localize `Desarrollé integraciones con múltiples proveedores de logística mediante APIs REST`,
        $localize `Participé activamente en revisiones de código y procesos de integración continua`
      ],
      responsibilities: $localize `Desarrollo de características frontend y backend, optimización de rendimiento, integración de APIs, resolución de bugs críticos y mantenimiento de la plataforma.`,
      url: 'https://www.skydropx.com'
    },
    {
      company: 'Homie',
      position: $localize `Desarrollador FullStack`,
      period: '2018 - 2020',
      description: $localize `Desarrollo de aplicaciones web para gestión de propiedades. Implementación de nuevas características y optimización del rendimiento de la aplicación.`,
      technologies: ['Ruby on Rails', 'Angular JS', 'React JS', 'MongoDB', 'Elasticsearch', 'Redis'],
      achievements: [
        $localize `Desarrollé un sistema de búsqueda avanzada de propiedades utilizando Elasticsearch, mejorando la relevancia y velocidad de resultados`,
        $localize `Implementé nuevos endpoints API para integrar el frontend con el backend en el wizard de registro de propiedades`,
        $localize `Automatización de correos para notificar a inquilinos y propietarios sobre nuevos eventos en tiempo real`,
        $localize `Diseñé y desarrollé la lógica para el cálculo dinámico de precios de renta y comisiones, adaptado a cada tipo de usuario`
      ],
      responsibilities: $localize `Desarrollo de funcionalidades, optimización de consultas en MongoDB, implementación de interfaces de usuario con Angular y React, integración de servicios de terceros.`,
      url: 'https://www.homie.mx'
    },
    {
      company: 'Aitelecom',
      position: $localize `Desarrollador FullStack`,
      period: '2016 - 2018',
      description:  $localize `Desarrollo de aplicaciones web para gestión de telecomunicaciones. Implementación de nuevas funcionalidades y mantenimiento de la plataforma de tickets.`,
      technologies: ['Java', 'Spring Boot','Javascript', 'Python', 'Yii', 'HTML5', 'CSS3', 'Bootstrap'],
      achievements: [
        $localize `Desarrollé un sistema de gestión de tickets que redujo el tiempo de resolución de incidencias`,
        $localize `Actualicé la plataforma de gestión de telecomunicaciones con un nuevo diseño responsivo utilizando Bootstrap`,
        $localize `Integracion de plataforma de rastreo de embarcaciones por satelite`,
        $localize `Actualización de sistema de streaming de videos para clientes`,
      ],
      responsibilities: $localize `Desarrollo de sistemas web, implementación de APIs RESTful, mantenimiento de aplicaciones existentes, creación de reportes y dashboards.`,
      url: 'https://www.aitelecom.net'
    },
    {
      company: 'Idetek',
      position: $localize `Desarrollador Web`,
      period: '2015 - 2016',
      description: $localize `Desarrollo de sitio web y aplicaciones para clientes locales. Implementación de soluciones personalizadas y mantenimiento de sitio`,
      technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Laravel', 'MySQL'],
      achievements: [
        $localize `Creé un sitio web corporativo para una empresa local que incrementó su visibilidad en línea`,
        $localize `Desarrollé un CMS personalizado para gestión de contenidos de sitios web`,
        $localize `Mejoré la velocidad de carga de sitios web optimizando imágenes y recursos estáticos`,
        $localize `Proporcioné soporte técnico y mantenimiento continuo`
      ],
      responsibilities: $localize `Diseño y desarrollo de sitio web, implementación de soluciones personalizadas, soporte interno.`,
      url: 'https://www.idetek.com.mx'
    }
  ];

  education = [
    {
      degree: $localize `Ingeniero en sistemas computacionales`,
      institution: 'Universidad Autonoma de Campeche',
      period: '2011 - 2016',
      description: $localize `Formación en desarrollo de software, bases de datos, redes y sistemas operativos. Participación en proyectos académicos y prácticas profesionales.`
    },
    {
      degree: $localize `Técnico en computación administrativa`,
      institution: `Centro de Estudios Tecnicos en Computacion de Campeche S.C.`,
      period: '2004 - 2005',
      description: $localize `Formación técnica enfocada en el uso de herramientas informáticas, administración de sistemas y soporte técnico. Aprendizaje de lenguajes de programación básicos y desarrollo web inicial.`
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
