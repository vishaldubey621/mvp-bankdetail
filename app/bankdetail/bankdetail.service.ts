import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankdetailService {

  constructor(private http: HttpClient) { }

  //post data to db.json(user)
  public creatuser(users) {

    return this.http.post('http://localhost:3000/bankform', users).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );

  }

  //delete User
  public deleteUser(user) {
    return this.http.delete('http://localhost:3000/bankform/' + user.id)
  }

  public getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/bankform');
  }
}

