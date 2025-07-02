import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <section class="contact-hero">
      <div class="container">
        <div class="content">
          <h1 class="title">Contacto</h1>
          <p class="subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>
      </div>
    </section>

    <section class="contact-info">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-methods">
            <h2 class="section-title">Información de Contacto</h2>
            <p class="contact-description">
              Estoy abierto a colaboraciones en proyectos
              interesantes o posiciones de tiempo completo. No dudes en contactarme utilizando
              el formulario o a través de alguno de los siguientes medios:
            </p>

            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:sergiohdez.chi&#64;gmail.com">sergiohdez.chi&#64;gmail.com</a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h3>Teléfono</h3>
                  <a href="tel:+529993803709">+52 999 380 37 09</a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                  <h3>Ubicación</h3>
                  <p>Mérida, Yucatán, Mérxico</p>
                </div>
              </div>
            </div>

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

          <div class="contact-form-container">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <h2 class="form-title">Envíame un mensaje</h2>

              <div class="form-group">
                <label for="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  placeholder="Tu nombre"
                  [class.invalid]="isFieldInvalid('name')"
                >
                <div class="error-message" *ngIf="isFieldInvalid('name')">
                  <span *ngIf="contactForm.get('name')?.errors?.['required']">El nombre es requerido</span>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  placeholder="tu@email.com"
                  [class.invalid]="isFieldInvalid('email')"
                >
                <div class="error-message" *ngIf="isFieldInvalid('email')">
                  <span *ngIf="contactForm.get('email')?.errors?.['required']">El email es requerido</span>
                  <span *ngIf="contactForm.get('email')?.errors?.['email']">Ingresa un email válido</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  formControlName="subject"
                  placeholder="Asunto de tu mensaje"
                  [class.invalid]="isFieldInvalid('subject')"
                >
                <div class="error-message" *ngIf="isFieldInvalid('subject')">
                  <span *ngIf="contactForm.get('subject')?.errors?.['required']">El asunto es requerido</span>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Mensaje</label>
                <textarea
                  id="message"
                  formControlName="message"
                  placeholder="Tu mensaje"
                  rows="5"
                  [class.invalid]="isFieldInvalid('message')"
                ></textarea>
                <div class="error-message" *ngIf="isFieldInvalid('message')">
                  <span *ngIf="contactForm.get('message')?.errors?.['required']">El mensaje es requerido</span>
                </div>
              </div>

              <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid || isSubmitting">
                <span *ngIf="!isSubmitting">Enviar mensaje</span>
                <span *ngIf="isSubmitting">Enviando...</span>
              </button>

              <div class="form-message" *ngIf="formSubmitted">
                <div class="success-message" *ngIf="submitSuccess">
                  <i class="fas fa-check-circle"></i> ¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.
                </div>
                <div class="error-message" *ngIf="!submitSuccess">
                  <i class="fas fa-exclamation-circle"></i> Ha ocurrido un error. Por favor, intenta nuevamente más tarde.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="map-container">
        <!-- Puedes reemplazar esto con un componente de mapa real -->
        <div class="placeholder-map">
          <div class="map-content">
            <i class="fas fa-map-marked-alt"></i>
            <p>Mérida, Yucatán, México</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting: boolean = false;
  formSubmitted: boolean = false;
  submitSuccess: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    const formControl = this.contactForm.get(field);
    return !!(formControl && formControl.invalid && (formControl.dirty || formControl.touched));
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;
      this.http.post('/form-handler.php', formData).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.formSubmitted = true;
          this.contactForm.reset();
          setTimeout(() => (this.formSubmitted = false), 5000);
        },
        error: () => {
          this.isSubmitting = false;
          this.submitSuccess = false;
          this.formSubmitted = true;
        }
      });
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
