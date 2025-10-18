import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskListComponent } from '../task-list/task-list'

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetailComponent {
  @Input() project: any | null = null

  getProgress(): number {
    const tasks = this.project?.tasks || []
    if (tasks.length === 0) return 0
    const done = tasks.filter((t: any) => t.status === 'Terminé').length
    return Math.round((done / tasks.length) * 100)
  }
}