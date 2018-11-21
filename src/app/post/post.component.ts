import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  posts: any;
  notification:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/post').subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  upvotePost(id) {
    this.http.get('/post/upvote/'+id).subscribe(data => {
      if(data)
      {
        this.notification="Successfully Upvoted the post.";
        this.posts.forEach((item)=>{if(item._id===id) item.votes=parseInt(item.votes)+1;});
      }
    });
  }

  downvotePost(id) {
    this.http.get('/post/downvote/'+id).subscribe(data => {
      if(data)
      {
        this.notification="Successfully Downvoted the post.";
        this.posts.forEach((item)=>{if(item._id===id) item.votes=parseInt(item.votes)-1;});
      }
    });
  }

}
