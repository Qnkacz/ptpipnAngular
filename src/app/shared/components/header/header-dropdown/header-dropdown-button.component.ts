import {Component, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {HlmButton} from '@spartan-ng/helm/button';

export interface DropDownItem {
  label: string,
  fragment: string
}

@Component({
  selector: "header-dropdown-button",
  imports: [CommonModule, RouterModule, HlmButton],
  styleUrls: ["header-dropdown.component.scss"],
  template: `
    <div class="nav-dropdown">
      <button
        hlmBtn
        variant="ghost"
        class="nav-button"
        (click)="handleMainClick()"
      >
        {{ label() }}
      </button>

      <div class="dropdown">
        @for (item of items(); track item.fragment) {
          <button
            hlmBtn
            variant="outline"
            class="dropdown-item"
            (click)="navigateToFragment(item.fragment)"
          >
            {{ item.label }}
          </button>
        }
      </div>
    </div>
  `
})

export class HeaderDropdownButtonComponent {
   label=  input<string>();
   route=  input<string>();
   items = input<DropDownItem[]>()
   trigger = input<string>('hover')

  isOpen = false;

  constructor(private router: Router) {}

  handleMainClick(): void {
    this.navigateMain();

    if (this.trigger() === 'click') {
      this.isOpen = !this.isOpen;
    }
  }

  navigateMain(): void {
    this.router.navigate([this.route()]);
  }

  navigateToFragment(fragment: string): void {
    this.router.navigate([this.route()], { fragment });
    this.isOpen = false;
  }
}
