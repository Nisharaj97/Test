import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8990/springboot-crud-rest/Emp/employees';

  constructor(private http: HttpClient) { }
  login(Users: Object): Observable<any> {
    return this.http.post(`${'http://localhost:8990/springboot-crud-rest/Emp/authenticate'}`,Users);
  }
  getAnniversary(employee: Object): Observable<Object> {
    return this.http.post(`${'http://localhost:8990/springboot-crud-rest/Emp/employeesanniv'}`,employee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl+'save'}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
