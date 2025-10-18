import { Component } from '@angular/core'
import { TaskListComponent } from '../task-list/task-list'
import { CommonModule } from '@angular/common'
import { ProjectDetailComponent } from '../project-detail/project-detail'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskListComponent, ProjectDetailComponent],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectListComponent {
  selectedProject: any | null = null
  searchTerm: string = ''

  selectProject(project: any) {
    this.selectedProject = project
  }

  get filteredProjects() {
    const term = this.searchTerm.trim().toLowerCase()
    if (!term) return this.projects
    return this.projects.filter((project) =>
      project.name?.toLowerCase().includes(term) ||
      project.description?.toLowerCase().includes(term)
    )
  }

  projects = [
    {
      name: 'Projet 1',
      description: 'Description 1',
      status: 'En cours',
      createdAt: new Date(2024, 0, 12),
      tasks: [
        { title: 'Tâche 1', priority: 'Haute', status: 'En attente' },
        { title: 'Tâche 2', priority: 'Moyenne', status: 'En cours' }
      ]
    },
    {
      name: 'Projet 2',
      description: 'Description 2',
      status: 'Terminé',
      createdAt: new Date(2023, 10, 3),
      tasks: [{ title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }]
    },
    {
      name: 'Projet 3',
      description: 'Description 2',
      status: 'Terminé',
      createdAt: new Date(2022, 6, 21),
      tasks: [{ title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }]
    },
    {
      name: 'Projet 4',
      description: 'Description 2',
      status: 'Terminé',
      createdAt: new Date(2021, 3, 8),
      tasks: [{ title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }]
    }
  ]
}
