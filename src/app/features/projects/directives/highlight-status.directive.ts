import { Directive, HostBinding, Input } from '@angular/core'

@Directive({
  selector: '[appHighlightStatus]',
  standalone: true
})
export class HighlightStatusDirective {
  private _status: string | null = null

  @Input('appHighlightStatus')
  set status(value: string | null) {
    this._status = value
    this.applyStyles()
  }

  @HostBinding('style.backgroundColor') bgColor: string | null = null
  @HostBinding('style.borderLeftColor') borderColor: string | null = null

  private applyStyles() {
    const s = (this._status || '').toLowerCase()
    switch (s) {
      case 'en attente':
        this.bgColor = '#FEF3C7' // yellow-50
        this.borderColor = '#F59E0B' // yellow-500
        break
      case 'en cours':
        this.bgColor = '#DBEAFE' // blue-50
        this.borderColor = '#3B82F6' // blue-500
        break
      case 'terminé':
        this.bgColor = '#D1FAE5' // green-50
        this.borderColor = '#10B981' // green-500
        break
      default:
        this.bgColor = null
        this.borderColor = null
    }
  }
}