import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {
admno=""
constructor(private api:ApiService){}
searchData:any=[]
readValue=()=>
{
  let data:any={"admno":this.admno}
  console.log(data)
  this.api.searchStudent(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.length==0)
      {
        alert("invalid adm no")
      }
      else{
        this.searchData=response
      }
    }
  )
}

deleteBtnClick=(id:any)=>
{
  let data:any={"id":id}
  this.api.deleteStudent(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("deleted")
        window.location.reload()
      }
      else
      {
        alert("something went wrong")
      }
    }
  )
}

}
