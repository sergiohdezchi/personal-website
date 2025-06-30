import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section about">
            <h3 class="footer-title">Sergio Hernandez</h3>
            <p class="footer-description">
              Creo experiencias web modernas que aportan valor real.
              Soy ingeniero de software con enfoque full stack, combinando frontend atractivo con backend robusto.
            </p>
            <div class="social-links">
              <a href="https://github.com/sergiohdezchi" target="_blank" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sergio-manuel-hernandez-chi-712629128" target="_blank" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/SergihdezC" target="_blank" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div class="footer-section links">
            <h3 class="footer-title">Enlaces Rápidos</h3>
            <ul class="footer-links">
              <li><a routerLink="/">Inicio</a></li>
              <li><a routerLink="/about">Sobre mí</a></li>
              <li><a routerLink="/skills">Habilidades</a></li>
              <li><a routerLink="/contact">Contacto</a></li>
            </ul>
          </div>

          <div class="footer-section contact">
            <h3 class="footer-title">Contacto</h3>
            <ul class="contact-info">
              <li>
                <i class="fas fa-envelope"></i>
                <a href="mailto:sergiohdez.chi&#64;gmail.com">sergiohdez.chi&#64;gmail.com</a>
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <a href="tel:+529993803709">+52 999 380 37 09</a>
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>Mérida, Yucatán, México</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ currentYear }} Mi Portfolio. Todos los derechos reservados.
          </p>
          <div class="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
