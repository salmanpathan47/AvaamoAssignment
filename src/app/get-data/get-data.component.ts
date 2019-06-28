import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent  {

  
  todo = [
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},   
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
    // 'Defect fix1',
    // 'Defect fix',
    // 'Nav bar',
    // 'Story 7890'
  ];
 
  done = [
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},   
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
    
  ];
 
  review = [
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},   
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
    {id:45,title:"Defect Fix",desc:"Not working",status:"high",Assignee:"sal"},
  
  ];

  qa=[];
  onAddCard(){
    
  }
 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
