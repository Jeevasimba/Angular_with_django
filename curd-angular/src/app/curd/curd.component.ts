import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss']
})


export class CurdComponent {
  StudentArray : any[] = [];
 
  name: string ="";
  initial: string ="";
  age: Number =0;
 
  currentStudentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
 
  }
 
  saveRecords()
  {
  
    let bodyData = {
      "name" : this.name,
      "initial" : this.initial,
      "age" : this.age
    };
 
    this.http.post("http://127.0.0.1:8000/student",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.getAllStudent();
    });
  }
 
 
  getAllStudent()
  {
    this.http.get("http://127.0.0.1:8000/student")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }
 
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.initial = data.initial;
   this.age = data.age;
   this.currentStudentID = data.id;
   
  }
 
 
 
  UpdateRecords()
  {
    let bodyData = 
    {
      "name" : this.name,
      "initial" : this.initial,
      "age" : this.age
    };
    
    this.http.put("http://127.0.0.1:8000/student/"+ this.currentStudentID+"/" , bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
        this.name = '';
        this.initial = '';
        this.age  = 0;
        this.getAllStudent();
    });
  }


  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/student"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getAllStudent();
    });
 
  }


}