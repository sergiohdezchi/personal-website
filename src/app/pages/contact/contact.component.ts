import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
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
