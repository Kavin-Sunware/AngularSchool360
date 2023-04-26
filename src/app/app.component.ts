import { Component, OnDestroy } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'angular-material-theming';
  private themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.currentTheme.subscribe(theme => {
      const body = document.body;
      body.classList.remove('theme1', 'theme2', 'theme3');
      body.classList.add(theme);
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
