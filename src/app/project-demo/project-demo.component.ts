import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-project-demo',
  templateUrl: './project-demo.component.html',
  styleUrls: ['./project-demo.component.scss']
})
export class ProjectDemoComponent implements OnInit {

  demo: string;
  constructor(public dialogRef: MatDialogRef<ProjectDemoComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.demo = data;
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
