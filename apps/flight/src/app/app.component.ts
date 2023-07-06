import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@e2e-testing-workshop/navbar';
import { SidebarComponent } from '@e2e-testing-workshop/sidebar';

@Component({
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
