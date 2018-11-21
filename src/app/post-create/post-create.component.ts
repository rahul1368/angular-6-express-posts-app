import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostCreateComponent implements OnInit {

  post = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  savePost() {
    this.http.post('/post', this.post)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/post-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
