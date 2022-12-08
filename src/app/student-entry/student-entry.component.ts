import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  name=""
  rollno=""
  admno=""
  college=""
  
  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={
      "name":this.name,"rollno":this.rollno,"admno":this.admno,"college":this.college
    }
    console.log(data)
    this.api.addStudent(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Student added successfully")
          this.admno=""
          this.college=""
          this.name=""
          this.rollno=""
        } else {
          alert("something went wrong")
        }
      }
    )
  }

}
