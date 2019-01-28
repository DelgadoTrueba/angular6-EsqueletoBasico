import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-anddrop-final',
  templateUrl: './drag-anddrop-final.component.html',
  styleUrls: ['./drag-anddrop-final.component.css']
})
export class DragANDdropFINALComponent implements OnInit {

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor() { }

  ngOnInit() {
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

  entered(event: CdkDragEnter<string[]>) {
    console.log(event.container.id, 'Entered', event.item.element.nativeElement.innerText);
  }

  exited(event: CdkDragExit<string[]>) {
    console.log(event.container.id, 'Exited', event.item.element.nativeElement.innerText);
  }

}
