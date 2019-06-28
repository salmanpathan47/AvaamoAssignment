import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todo = [
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    },
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    },
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    },
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    },
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    },
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    }
    
  ];

  done = [
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    },
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    },
    { 
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    }
  ];

  review = [
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "high",
      Assignee: "sal"
    },
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "ss",
      Assignee: "sal"
    },
    {
      id: 45,
      title: "Defect Fix",
      desc: "Not working",
      status: "sss",
      Assignee: "sal"
    }
  ];

  qa = [];
  onAddCard() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
