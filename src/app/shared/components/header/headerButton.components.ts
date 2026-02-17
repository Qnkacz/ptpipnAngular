import {Component, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HlmButton} from '@spartan-ng/helm/button';

@Component({
  selector: 'header-button',
  imports: [RouterLink, RouterLinkActive, HlmButton],
  template:`
    <button hlmBtn variant="ghost" routerLink="{{ url() }}" routerLinkActive="font-bold">
      {{ displayName() }}
    </button>
  `
})

export class HeaderButtonComponent {
   displayName = input<string>()
   url = input<string>();
}
