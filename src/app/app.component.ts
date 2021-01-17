import { Component } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';
import { HistoryService } from './util/history/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'article-front';
  constructor(private router: Router,
              private historyS: HistoryService) {
    router.events
    .subscribe((event) => {
      if(event instanceof NavigationStart)
        this.historyS.addHistory(event.url);
    });
  }
}
