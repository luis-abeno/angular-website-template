import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18NService {
  private _currentLanguage = new BehaviorSubject<string>('en');
  currentLanguage = this._currentLanguage.asObservable();

  switchLanguage(language: string) {
    this._currentLanguage.next(language);
  }
}
