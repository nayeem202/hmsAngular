import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  template: `
  <button
    class="btn btn-outline-secondary"
    mwlConfirmationPopover
    [popoverTitle]="popoverTitle"
    [popoverMessage]="popoverMessage"
    placement="left"
    (confirm)="confirmClicked = true"
    (cancel)="cancelClicked = true"
  >
    Click me!
  </button>
`,
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  getPatient: any = [];

  patientName ="patientName";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllPatient();
  }



  getAllPatient() {
    const header = {
      "Content-Type": "application/json"
    };

    this.http.get('http://localhost:8080/getAllPatientData', { headers: header }).subscribe((res) => {
      //console.log(res);
      this.getPatient = res;
      console.log(this.getPatient);

    }, err => {
      console.log("load failed");


    })
  }

}
