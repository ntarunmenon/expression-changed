import { Component, OnInit } from '@angular/core';
import { MainSectionContent } from './main-section-content';
import { MaincontentService } from './maincontent.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'expression-changed';
  mainSectionContent:MainSectionContent;
  contentAnnounce$:Observable<MainSectionContent>;
  
  constructor(private mainContentService:MaincontentService) { }

  ngOnInit(): void {
    this.contentAnnounce$ = this.mainContentService.contentAnnounce$;
    this.contentAnnounce$.subscribe(mainSectionContent => 
      {
        this.mainSectionContent = mainSectionContent
      }
      );
  }
}
