import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('theme1');
  currentTheme = this.theme.asObservable();

  constructor() {}

  changeTheme(newTheme: string) {
    this.theme.next(newTheme);
  }
}
