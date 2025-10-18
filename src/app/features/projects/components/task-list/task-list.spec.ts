import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TaskListComponent } from './task-list'

describe('TaskListComponent', () => {
  let fixture: ComponentFixture<TaskListComponent>
  let component: TaskListComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TaskListComponent)
    component = fixture.componentInstance
  })

  it('should apply correct color class per priority', () => {
    component.tasks = [
      { title: 'Urgent', priority: 'Haute', status: 'En cours' },
      { title: 'Normal', priority: 'Moyenne', status: 'En attente' },
      { title: 'Low', priority: 'Basse', status: 'Terminé' }
    ]

    fixture.detectChanges()

    const h3s: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('h3'))
    expect(h3s.length).toBe(3)
    expect(h3s[0].classList.contains('text-red-500')).toBeTrue()
    expect(h3s[1].classList.contains('text-yellow-500')).toBeTrue()
    expect(h3s[2].classList.contains('text-green-500')).toBeTrue()
  })
})
