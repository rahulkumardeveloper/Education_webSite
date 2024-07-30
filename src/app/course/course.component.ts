import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import courseData from '../files/data.json';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(public services: ServicesService) { }
  ButtonStatus = this.services.joinNowStatus;
  course: { id: number, name: string, description: string, image: string, url: string }[] = courseData;

  ngOnInit(): void {
  }


  // course = [
  //   {
  //     'id': 1,
  //     'name': 'Angular',
  //     'description': 'This is Angular Course.It is very popular course for fronted developer.',
  //     'image': 'https://www.grazitti.com/assets/2018/06/8-Proven-Reasons-You-Need-Angular-02.png',
  //     'url': 'https://angular.io/'
  //   },
  //   {
  //     'id': 2,
  //     'name': 'NodeJs',
  //     'description': 'This is Nodejs Course.It is popular course for backend developer.',
  //     'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
  //     'url': 'https://nodejs.org/en/docs/'
  //   },
  //   {
  //     'id': 3,
  //     'name': 'TypeScript',
  //     'description': 'This is TypeScript Course.It is very popular course for angular developer.',
  //     'image': 'https://devblogs.microsoft.com/typescript/wp-content/uploads/sites/11/2018/08/typescriptfeature.png',
  //     'url': 'https://www.typescriptlang.org/docs/'
  //   },
  //   {
  //     'id': 4,
  //     'name': 'JavaScript',
  //     'description': 'This is javascript Course.It is very popular course for UI developer.',
  //     'image': 'https://camo.githubusercontent.com/146619ea5e1302a387ccd09ef32fb03f973c58b079fd116c985bf55bb1d0c319/68747470733a2f2f692e6962622e636f2f4e545678316a572f646f776e6c6f61642e6a7067',
  //     'url': 'https://www.javascript.com/learn/strings'
  //   },
  //   {
  //     'id': 5,
  //     'name': 'ReactJs',
  //     'description': 'This is React js Course.It is very popular course for UI with FrameWork developer.',
  //     'image': 'https://lh4.googleusercontent.com/sBaxDLU9jP8BOaB8vNld8Yu_dv7V3HZGBNBHiguET93-VXWxm1tO3J6PtAWEg46cBAicYGZtZEMwRdYO3NYJUKBrEIT18-KvRUAMIHzQ_Q1sagcKZa3hyKVR4hJaf4VpTV3hoAoa',
  //     'url': 'https://reactjs.org/docs/getting-started.html'
  //   },
  //   {
  //     'id': 6,
  //     'name': 'MongoDB',
  //     'description': 'This is mongo DB Course.It is very popular course for Database developer.',
  //     'image': 'https://miro.medium.com/max/1040/1*0lgunvVYa8gZ_sfMHflyvw.jpeg',
  //     'url': 'https://www.tutorialspoint.com/mongodb/index.htm'
  //   },
  //   {
  //     'id': 7,
  //     'name': 'Web Development',
  //     'description': 'This is web development Course.It is very popular course for web developer.',
  //     'image': 'https://www.kindpng.com/picc/m/124-1247377_website-development-auckland-web-development-png-images-hd.png',
  //     'url': 'https://www.w3schools.com/whatis/'
  //   },
  //   {
  //     'id': 8,
  //     'name': 'Full Stack Development',
  //     'description': 'This is fullStack Course.It is very popular course for full stack developer.',
  //     'image': 'https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png',
  //     'url': 'https://www.geeksforgeeks.org/what-is-full-stack-development/'
  //   }
  // ]

  joinNow() {

  }

}
