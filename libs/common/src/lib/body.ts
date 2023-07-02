import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const BODY = new InjectionToken<HTMLBodyElement>('BODY', {
  providedIn: 'root',
  factory: () => inject(DOCUMENT).body as HTMLBodyElement,
});
