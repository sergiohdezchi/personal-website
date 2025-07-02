import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-selector">
      <a
        *ngFor="let lang of languages; let last = last"
        class="language-option laguage-option-color"
        [class.active]="isCurrentLanguage(lang.code)"
        [href]="getLanguageUrl(lang.code)">
        <span class="lang-code">{{ lang.code }}</span>
        <span class="separator" *ngIf="!last">|</span>
      </a>
    </div>
  `,
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' }
  ];

  constructor() {}

  getCurrentLanguageCode(): string {
    // Obtener el idioma actual de la URL (es o en)
    const path = window.location.pathname;
    const match = path.match(/^\/(es|en)\//);
    return match ? match[1].toUpperCase() : 'ES';
  }

  isCurrentLanguage(code: string): boolean {
    return this.getCurrentLanguageCode().toLowerCase() === code;
  }

  getLanguageUrl(langCode: string): string {
    // Construir la URL para el idioma seleccionado
    const currentPath = window.location.pathname;
    const currentLang = this.getCurrentLanguageCode().toLowerCase();

    // Reemplazar el idioma en la ruta actual
    if (currentPath.startsWith(`/${currentLang}/`)) {
      return currentPath.replace(`/${currentLang}/`, `/${langCode}/`);
    } else {
      // Si no hay idioma en la ruta, añadir el nuevo
      return `/${langCode}${currentPath}`;
    }
  }
}
