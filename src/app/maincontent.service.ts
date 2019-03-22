import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MainSectionContent } from './main-section-content';

@Injectable({
  providedIn: 'root'
})
export class MaincontentService {

  private contentAnnounce = new Subject<MainSectionContent>();
  contentAnnounce$ = this.contentAnnounce.asObservable();

  constructor() { }
  
  announceContent(content:MainSectionContent){
    this.contentAnnounce.next(content);
}  
}
