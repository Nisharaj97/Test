import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Users } from '../Users';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  users: Users =new Users();
  
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  save() {
    this.employeeService
    .login(this.users).subscribe(data => {
      
      console.log(data)
      if(data=="sucess"){
        alert("login sucessfully");
      this.router.navigate(['/employees']);
      }
      else{
        alert("Login failed");
      }
  }, 
    error => console.log(error));
  }

  onSubmit() {
    //this.submitted = true;
    this.save();    
  }

}
