import { Component, OnInit } from '@angular/core';
import { Istudents } from 'src/app/models/std';
import { Istudent } from 'src/app/models/student';
import { Itab } from 'src/app/models/tab';

@Component({
  selector: 'app-tab-witch',
  templateUrl: './tab-witch.component.html',
  styleUrls: ['./tab-witch.component.css']
})
export class TabWitchComponent implements OnInit {

  strArr:Array<Istudents>=[
    
  ]

studentArr:Array<Istudent>=[
  {
    fname:'karan',
    lname:'shitole',
    email:'karanshitole11@gmail.com',
    age:26
  },
  {
    fname:'aaru',
    lname:'shitole',
    email:'aarushitole11@gmail.com',
    age:5
  },
  {
    fname:'Sakshi',
    lname:'shitole',
    email:'sakshishitole11@gmail.com',
    age:9
  },
]
selectedFramwork:string='angular'
 tabArr:Array<Itab>=[
  {
    TabTitle:'Angular',
    TabContent:'<strong>Angular</strong><p>Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>'
  },
  {
    TabTitle:'React',
    TabContent:'<strong>Angular</strong><p>Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>'
  },
  {
    TabTitle:'Flex',
    TabContent:'<strong>Angular</strong><p>Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>'
  }
 ]
  constructor() { }

  ngOnInit(): void {
  }
  onstd(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
  if(fname.value&&lname.value&&email.value&&contact.value){
    let newstd:Istudents={
      fname:fname.value,
      lname:lname.value,
      email:email.value,
      contact:+contact.value
    }
    console.log(newstd);
    
    fname.value=lname.value=email.value=contact.value=''
    this.strArr.push(newstd)
  }
  }

}
