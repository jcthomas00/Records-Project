import { Component, OnInit } from '@angular/core';
import { Profile } from '../Profile/profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  profile:Profile = new Profile();
  horoscope:any = {};
  signs:string[] = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 
                    'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 
                    'Capricorn', 'Aquarius', 'Pisces'];
  now = Date.now();

  headers = new HttpHeaders({
    'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
    'x-rapidapi-key': 'iWZLmUjilamshMIZ2BzSutl9KfyTp1GodFRjsn6q6oXIlZRVHD'});
  options = {headers: this.headers};
  data =  '';

  onSubmit = (birthdayForm:any) => {
    this.profile = new Profile(birthdayForm.value);
    console.log(this.profile); 
    const url = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${this.profile.sign}&day=today`;
    this.http.post<any>(url,this.data,this.options).subscribe(
      res =>{
          this.horoscope = res;
      },
      err => {
          console.log(err.message);
      }
    )
  }

  ngOnInit(): void {
  }

}
