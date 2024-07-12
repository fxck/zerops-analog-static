import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextsComponent } from './texts/texts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
      }
    `,
  ],
})
export class AppComponent {}
