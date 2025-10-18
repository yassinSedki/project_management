import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'priorityColor',
  standalone: true
})
export class PriorityColorPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    const v = (value ?? '').trim().toLowerCase()
    switch (v) {
      case 'haute':
        return 'text-red-500'
      case 'moyenne':
        return 'text-yellow-500'
      case 'basse':
        return 'text-green-500'
      default:
        return ''
    }
  }
}