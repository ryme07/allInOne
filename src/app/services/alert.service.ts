import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private defaultId = 'default-alert';

  constructor() { }

  alert(message: string, type: any, options: Partial<any> = {}) {
    const id = options.id || this.defaultId;
    // TODO const alert = etc
  }

  error(message: string, options?: Partial<any>) {
    this.alert(message, options)
  }
}
