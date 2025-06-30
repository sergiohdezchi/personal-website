import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <a class="logo" routerLink="/">
          <img class="image-profile" src="images/logo.svg" width="50" height="50" alt="logo">
        </a>

        <nav class="nav">
          <ul class="nav-list">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a></li>
            <li><a routerLink="/sobre-mi" routerLinkActive="active">Sobre mí</a></li>
            <li><a routerLink="/habilidades" routerLinkActive="active">Habilidades</a></li>
            <li><a routerLink="/contacto" routerLinkActive="active">Contacto</a></li>
          </ul>
        </nav>

        <button class="mobile-toggle" (click)="toggleMobileMenu()" [attr.aria-expanded]="mobileMenuOpen">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <div class="mobile-menu" [class.open]="mobileMenuOpen">
          <ul class="mobile-nav-list">
            <li><a routerLink="/" (click)="closeMobileMenu()">Inicio</a></li>
            <li><a routerLink="/sobre-mi" (click)="closeMobileMenu()">Sobre mí</a></li>
            <li><a routerLink="/habilidades" (click)="closeMobileMenu()">Habilidades</a></li>
            <li><a routerLink="/contacto" (click)="closeMobileMenu()">Contacto</a></li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  constructor() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
