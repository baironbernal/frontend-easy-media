import { Component } from '@angular/core';
import { PostResponse } from '../../interfaces/post-response.interface';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-publications',
  templateUrl: './my-publications.component.html',
  styleUrls: ['./my-publications.component.scss', '../../styles/styles-post-shared.scss']
})
export class MyPublicationsComponent {
  title: string = 'My publications';

  postsResponse: PostResponse = {
    ok: false,
    posts: []
  };
  
  private suscription: Subscription = new Subscription;
  constructor(private postService: PostService) {}


  ngOnInit() {
    this.getMyPublications()
  }

   getMyPublications() {
      
      this.suscription = this.postService.getMyPosts('1232131').subscribe(data => this.postsResponse = data);
   }


   ngOnDestroy() {
    this.suscription.unsubscribe();
   }

}
