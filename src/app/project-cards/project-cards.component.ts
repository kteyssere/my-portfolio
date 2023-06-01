import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProjectDemoComponent} from "../project-demo/project-demo.component";
import projectsData from "../../assets/projects.json";
@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent {

  constructor(public dialog: MatDialog) {}

  public projects = projectsData;
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, demoId: string): void {
    this.dialog.open(ProjectDemoComponent, {
      data: demoId,
      height: 'auto',
      minWidth: 'auto',
      minHeight: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }


  openLink(url: string) {
    window.open(url, "_blank");
  }
}
