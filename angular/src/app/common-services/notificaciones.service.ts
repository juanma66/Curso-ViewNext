import { Injectable } from '@angular/core';
import { LoggerService } from 'src/lib/mu-core';

export enum NotificationType {
  error,
  warn,
  info,
  log,
}

export class Notification {
  constructor(
    private id: number,
    private message: string,
    private type: NotificationType
  ) {}

  public get Id() {
    return this.id;
  }
  public get Message() {
    return this.message;
  }
  public get Type() {
    return this.type;
  }
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private listado: Array<Notification> = [];
  public readonly NotificationType = NotificationType;

  constructor(private out: LoggerService) {}

  public get Listado() {
    return Object.assign([], this.listado);
  }
  public get HayNotificaciones() {
    return this.listado.length > 0;
  }

  public add(msg: string, type: NotificationType = NotificationType.error) {
    if (!msg || msg === '') {
      this.out.error('Falta el mensaje de notificación.');
      return;
    }
    const id = this.HayNotificaciones
      ? this.listado[this.listado.length - 1].Id + 1
      : 1;
    const n = new Notification(id, msg, type);
    this.listado.push(n);
    // Redundancia: Los errores también se muestran en consola
    if (type === NotificationType.error) {
      this.out.error(`NOTIFICATION: ${msg}`);
    }
  }

  public remove(index: number) {
    if (index < 0 || index >= this.listado.length) {
      this.out.error('Index out of range.');
      return;
    }
    this.listado.splice(index, 1);
  }

  public clear() {
    if (this.HayNotificaciones) {
      this.listado.splice(0);
    }
  }
}
