import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SjDirective } from 'sj-demo';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SjDirective],
  template: `
  <div [sj]="{bg:'blue'}">
  ss
</div>
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
