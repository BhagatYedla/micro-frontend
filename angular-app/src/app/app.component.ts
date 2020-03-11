import { Component , Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  open() {
    const event = new CustomEvent('navigate',{detail:'React Application'});
    window.dispatchEvent(event);
  }

}
