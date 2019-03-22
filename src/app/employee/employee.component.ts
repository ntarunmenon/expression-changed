import { Component, OnInit } from '@angular/core';
import { MaincontentService } from '../maincontent.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private mainSectionContentService:MaincontentService) { }

  ngOnInit() {
    this.mainSectionContentService.announceContent({
      mainheading:'Employee Manger',
      mainsubheading:'To manage PrivilegeManager Employees',
      sectionheading:'Employee List',
      buttontext:'Create Employee'
    });
  }
}
