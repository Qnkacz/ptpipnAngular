import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {LoggerService} from '../core/services/logger.service';
import {filter} from 'rxjs';
import {HeaderButtonComponent} from '../shared/components/header/headerButton.components';
import {
  DropDownItem,
  HeaderDropdownButtonComponent
} from '../shared/components/header/header-dropdown/header-dropdown-button.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HeaderButtonComponent, HeaderDropdownButtonComponent],
  template: `
    <header class="border-b shadow-sm sticky top-0 z-50 bg-white">
      <div class="container mx-auto flex items-center justify-between px-4 py-4">
        <header-dropdown-button label = "Konfrencje" route = "/conferences" [items]="dropDownItems"/>
        <header-button displayName="Bank Wiedzy" url="/knowledgeHub"/>
        <header-button displayName="Aktualności" url="/news"/>
        <h1 class="text-lg font-semibold">
          <a routerLink="/">
            PTPiPN
          </a>
        </h1>
        <header-button displayName="O nas" url="/about"/>
        <header-button displayName="Sprawy członkowskie" url="/member-news"/>
        <header-button displayName="Kotakt" url="/contact"/>
      </div>
    </header>
  `
})
export class HeaderComponent {
  private router = inject(Router)
  private logger = inject(LoggerService)

  public dropDownItems: DropDownItem[] = [
    {
      label: "Neonursing 2025",
      fragment: "Neonursing",
    },
    {
      label: "Inter Personalna opieka nad kobietą i noworodkiem",
      fragment: "interpersonalna-opiekna-nad-kobieta-i-noworodkiem"
    }
  ]

  constructor() {
    this.logger.info('header component loaded.')
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.logger.info('Navigation event clicked', {
          url: event.urlAfterRedirects
        })
      })
  }
}
