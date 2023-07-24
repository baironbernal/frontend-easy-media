import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../styles/styles-post-shared.scss']
})
export class CreateComponent {
  h1: string = 'Create message';
  title: string = '';
  message: string = '';
  

  
}
