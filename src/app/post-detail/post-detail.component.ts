import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostDetailComponent implements OnInit {

  post = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPostDetail(this.route.snapshot.params['id']);
  }

  getPostDetail(id) {
    this.http.get('/post/'+id).subscribe(data => {
      this.post = data;
    });
  }

  

  deletePost(id) {
    this.http.delete('/post/'+id)
      .subscribe(res => {
          this.router.navigate(['/posts']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
