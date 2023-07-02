import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Renderer2,
} from '@angular/core';

import { BODY } from '../../common/body';

@Component({
  standalone: true,
  selector: 'flight-navbar',
  templateUrl: 'navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private sidebarVisible = false;

  private body = inject(BODY);
  private renderer = inject(Renderer2);

  sidebarToggle(): void {
    if (this.sidebarVisible) {
      this.sidebarVisible = false;
      this.body.classList.remove('nav-open');
      this.renderer.removeClass(this.body, 'nav-open');
      return;
    }

    this.sidebarVisible = true;
    this.renderer.addClass(this.body, 'nav-open');
  }
}
