import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, private settingsService: SettingsService) { }

  ngOnInit() {
  }

  changeColor(theme: string, link: any) {
    this.applycheck(link);
    this.settingsService.applyTheme(theme);
  }

  applycheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
        ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  placeCheck() {
      const selectores: any = document.getElementsByClassName('selector');
      const theme = this.settingsService.settings.theme;

      for (const ref of selectores) {
          if (ref.getAttribute('data-theme') === theme) {
            ref.classList.add('working');
            break;
          }
      }
  }

}
