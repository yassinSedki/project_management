import { Component, signal } from '@angular/core'
import { ProjectListComponent } from './features/projects/components/project-list/project-list'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app')
}
