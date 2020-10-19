import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee.ts';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  myDateValue: Date;
  employee: Employee;
  dateval:String;model:any;
  data:any;
  anniversarylist:any=[];
  ngOnInit() {
    // this.myDateValue = new Date();
    // this.dateval="1";
    // this.employeeService.getAnniversary(this.dateval)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.employee = data;
    //   }, error => console.log(error));
  
  }
  change(curdte)
  {
    this.employee = new Employee();
  this.employee.firstName=curdte;
    this.employeeService.getAnniversary(this.employee)
      .subscribe(data => {
        this.data=data;
        console.log(data)
       // this.employee = data;
       this.anniversarylist=this.data.annivlist;
      }, error => console.log(error));
  
    }

  onDateChange(newDate: Date) {
    console.log(newDate);

  }
}
