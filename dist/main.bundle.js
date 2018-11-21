webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/\">SIMPLE CRUD MEAN APPLICATION</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"\"><a href=\"/\">Home</a></li>\n      <li class=\"\"><a [routerLink]=\"['/posts']\">All Posts</a></li>\n      <li class=\"\"><a [routerLink]=\"['/post-create']\">Add a Post</a></li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_detail_post_detail_component__ = __webpack_require__("./src/app/post-detail/post-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_create_post_create_component__ = __webpack_require__("./src/app/post-create/post-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_edit_post_edit_component__ = __webpack_require__("./src/app/post-edit/post-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: 'posts',
        component: __WEBPACK_IMPORTED_MODULE_6__post_post_component__["a" /* PostComponent */],
        data: { title: 'Post List' }
    },
    {
        path: 'post-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__post_detail_post_detail_component__["a" /* PostDetailComponent */],
        data: { title: 'Post Details' }
    },
    {
        path: 'post-upvote/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__post_detail_post_detail_component__["a" /* PostDetailComponent */],
        data: { title: 'Post Upvote' }
    },
    {
        path: 'post-create',
        component: __WEBPACK_IMPORTED_MODULE_8__post_create_post_create_component__["a" /* PostCreateComponent */],
        data: { title: 'Create Post' }
    },
    {
        path: 'post-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__post_edit_post_edit_component__["a" /* PostEditComponent */],
        data: { title: 'Edit Post' }
    },
    { path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_7__post_detail_post_detail_component__["a" /* PostDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__post_create_post_create_component__["a" /* PostCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__post_edit_post_edit_component__["a" /* PostEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/post-create/post-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-create/post-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Post</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"savePost()\" #postForm=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"publisher\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.publisher\" name=\"author\" required>\n        </div>\n        \n        <div class=\"form-group\">\n          <label for=\"post_text\">Post Text</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.post_text\" name=\"post_text\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!postForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post-create/post-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostCreateComponent = (function () {
    function PostCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.post = {};
    }
    PostCreateComponent.prototype.ngOnInit = function () {
    };
    PostCreateComponent.prototype.savePost = function () {
        var _this = this;
        this.http.post('/post', this.post)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/post-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    PostCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-create',
            template: __webpack_require__("./src/app/post-create/post-create.component.html"),
            styles: [__webpack_require__("./src/app/post-create/post-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/post-detail/post-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-detail/post-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1>{{ post.title }}</h1>\n  <dl class=\"list\">\n    <dt>Publisher</dt>\n    <dd>{{ post.publisher }}</dd>\n    <dt>Post Text</dt>\n    <dd>{{ post.post_text }}</dd>\n    <dt>Created Date</dt>\n    <dd>{{ post.created_at | date:'short' }}</dd>\n    <dt>Update Date</dt>\n    <dd>{{ post.updated_date | date:'short' }}</dd>\n  </dl>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <a [routerLink]=\"['/post-edit', post._id]\" class=\"btn btn-lg btn-success\">EDIT</a>\n    </div>\n    <div class=\"col-md-6\">\n      <button class=\"btn btn-lg btn-danger\" type=\"button\" (click)=\"deletePost(post._id)\">DELETE</button>\n    </div>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/post-detail/post-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostDetailComponent = (function () {
    function PostDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.post = {};
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.getPostDetail(this.route.snapshot.params['id']);
    };
    PostDetailComponent.prototype.getPostDetail = function (id) {
        var _this = this;
        this.http.get('/post/' + id).subscribe(function (data) {
            _this.post = data;
        });
    };
    PostDetailComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.http.delete('/post/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/posts']);
        }, function (err) {
            console.log(err);
        });
    };
    PostDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-detail',
            template: __webpack_require__("./src/app/post-detail/post-detail.component.html"),
            styles: [__webpack_require__("./src/app/post-detail/post-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "./src/app/post-edit/post-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-edit/post-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Post</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updatePost(post._id)\" #postForm=\"ngForm\">\n        \n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.title\" name=\"title\" required>\n        </div>\n        \n        \n        <div class=\"form-group\">\n          <label for=\"publisher\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"post_text\">Post</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.post_text\" name=\"post_text\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!postForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post-edit/post-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostEditComponent = (function () {
    function PostEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.post = {};
    }
    PostEditComponent.prototype.ngOnInit = function () {
        this.getPost(this.route.snapshot.params['id']);
    };
    PostEditComponent.prototype.getPost = function (id) {
        var _this = this;
        this.http.get('/post/' + id).subscribe(function (data) {
            _this.post = data;
        });
    };
    PostEditComponent.prototype.updatePost = function (id) {
        var _this = this;
        this.post.updated_date = Date.now();
        this.http.put('/post/' + id, this.post)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/post-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    PostEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-edit',
            template: __webpack_require__("./src/app/post-edit/post-edit.component.html"),
            styles: [__webpack_require__("./src/app/post-edit/post-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PostEditComponent);
    return PostEditComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1> All Posts\n    <a [routerLink]=\"['/post-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n    </a>\n  </h1>\n  <div class=\"alert alert-success\" >{{ notification }}</div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Publisher</th>\n        <th>Post</th>\n        <th>Created At</th>\n        <th>Updated At</th>\n        <th>Votes</th>\n        <th>Upvote</th>\n        <th>Downvote</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let post of posts\">\n        <td>{{ post.title }}</td>\n        <td>{{ post.publisher }}</td>\n        <td>{{ post.post_text }}</td>\n        <td>{{ post.created_at | date:'short'}}</td>\n        <td>{{ post.updated_date | date:'short' }}</td>\n        <td>{{ post.votes }}</td>\n        <td><a type=\"button\" class=\"btn btn-success\" (click)=\"upvotePost(post._id)\">Upvote</a></td>\n        <td><a type=\"button\" class=\"btn btn-danger\" (click)=\"downvotePost(post._id)\">Downvote</a></td>\n        <td><a [routerLink]=\"['/post-details', post._id]\">Show Detail</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = (function () {
    function PostComponent(http) {
        this.http = http;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/post').subscribe(function (data) {
            console.log(data);
            _this.posts = data;
        });
    };
    PostComponent.prototype.upvotePost = function (id) {
        var _this = this;
        this.http.get('/post/upvote/' + id).subscribe(function (data) {
            if (data) {
                _this.notification = "Successfully Upvoted the post.";
                _this.posts.forEach(function (item) { if (item._id === id)
                    item.votes = parseInt(item.votes) + 1; });
            }
        });
    };
    PostComponent.prototype.downvotePost = function (id) {
        var _this = this;
        this.http.get('/post/downvote/' + id).subscribe(function (data) {
            if (data) {
                _this.notification = "Successfully Downvoted the post.";
                _this.posts.forEach(function (item) { if (item._id === id)
                    item.votes = parseInt(item.votes) - 1; });
            }
        });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map