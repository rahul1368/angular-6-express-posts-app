import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostEditComponent implements OnInit {

  post: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPost(this.route.snapshot.params['id']);
  }

  getPost(id) {
    this.http.get('/post/'+id).subscribe(data => {
      this.post = data;
    });
  }

  updatePost(id) {
    this.post.updated_date = Date.now();
    this.http.put('/post/'+id, this.post)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/post-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
