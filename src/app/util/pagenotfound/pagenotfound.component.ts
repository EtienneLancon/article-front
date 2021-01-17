import { Component, OnInit } from '@angular/core';

import { HistoryService } from './../history/history.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  previousUrl!: string;

  constructor(private historyS: HistoryService) {
  }

  ngOnInit(): void {
    let historyStack = this.historyS.getHistory();
    
    history.replaceState({}, "titi", historyStack[historyStack.length-2]);

    window.location.href = "http://localhost:8000";
  }

}
