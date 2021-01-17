import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private historyStack: string[] = [];

  constructor() {}

  public addHistory(path: string): void{
    this.historyStack.push(path);
  }

  public getHistory(): string[]{
    return this.historyStack;
  }
}
