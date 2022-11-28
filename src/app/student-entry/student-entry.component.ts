import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  name=""
  rollno=""
  admno=""
  mobile=""
  college=""
  parent=""
  parentmobile=""
  username=""
  password=""

  readValue=()=>
  {
    let data:any={
      "name":this.name,"rollno":this.rollno,"admno":this.admno,"mobile":this.mobile,"college":this.college,"parent":this.parent,
      "parentmobile":this.parentmobile,"username":this.username,"password":this.password
    }
    console.log(data)
  }

}
