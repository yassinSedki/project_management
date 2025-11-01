import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css'
})
export class AddProject {
  project = {
    name: '',
    status: ''
  };
  showSuccessMessage = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Projet soumis:', this.project);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
    }
  }

  onReset(form: NgForm) {
    form.resetForm();
    this.showSuccessMessage = false;
  }
}
