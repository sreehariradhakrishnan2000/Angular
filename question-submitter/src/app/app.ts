import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import * as emailjs from '@emailjs/browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  fb = inject(FormBuilder);
  title = signal('Question to Email Submitter');
  questionForm: FormGroup;
  loading = signal(false);
  success = signal(false);
  errorMsg = signal('');
  charCount = signal(0);
  maxChars = 500;

  constructor() {
    this.questionForm = this.fb.group({
      question: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onQuestionChange() {
    const text = this.questionForm.get('question')?.value || '';
    this.charCount.set(text.length);
  }

  getCharCount(): number {
    return this.charCount();
  }

  getCharPercentage(): number {
    return (this.charCount() / this.maxChars) * 100;
  }

  resetForm() {
    this.questionForm.reset();
    this.charCount.set(0);
    this.errorMsg.set('');
  }

  async sendQuestion() {
    if (this.questionForm.invalid) {
      this.errorMsg.set('Please enter a valid question (min 10 characters)');
      return;
    }
    this.loading.set(true);
    this.success.set(false);
    this.errorMsg.set('');

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        { question: this.questionForm.value.question },
        environment.emailjs.publicKey
      );
      this.success.set(true);
      this.questionForm.reset();
      this.charCount.set(0);
      setTimeout(() => this.success.set(false), 3000);
    } catch (error) {
      this.errorMsg.set('Failed to send. Please check your EmailJS configuration and try again.');
      console.error('EmailJS error:', error);
    } finally {
      this.loading.set(false);
    }
  }

  get question() {
    return this.questionForm.get('question');
  }
}

