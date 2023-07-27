import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../styles/styles-post-shared.scss']
})
export class CreateComponent {
  h1: string = 'Create message';
  post: Post = {
    _id: '',
    title: '',
    message: '',
    date_at: '',
    
  };
  

  
}
