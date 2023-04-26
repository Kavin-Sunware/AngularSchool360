import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schoolform',
  templateUrl: './schoolform.component.html',
  styleUrls: ['./schoolform.component.scss']
})
export class SchoolformComponent {
  form: FormGroup;

  API_URL = 'https://school360api.azurewebsites.net';
  apiUrl = `${this.API_URL}/api/Organizations/CreateOrganization`;

  cols = 3;
  fields = [
    { label: 'Recognition Number', name: 'RecognizationNumber', type: 'text', placeholder: 'Recognition Number' },
    { label: 'Name', name: 'Name', type: 'text', placeholder: 'Name' },
    { label: 'Code', name: 'Code', type: 'text', placeholder: 'Code' },
    { label: 'Email', name: 'Email', type: 'email', placeholder: 'Email' },
    { label: 'Date Of Start', name: 'DateOfStart', type: 'date', placeholder: 'Date Of Start' },
    { label: 'Subscription Start Date', name: 'SubscriptionStartDate', type: 'date', placeholder: 'Subscription Start Date' },
    { label: 'Subscription End Date', name: 'SubscriptionEndDate', type: 'date', placeholder: 'Subscription End Date' },
    { label: 'Active Subscription', name: 'ActiveSubscription', type: 'checkbox', placeholder: 'Active Subscription' },
    { label: 'Address 1', name: 'Address1', type: 'text', placeholder: 'Address 1' },
    { label: 'Address 2', name: 'Address2', type: 'text', placeholder: 'Address 2' },
    { label: 'City', name: 'City', type: 'number', placeholder: 'City' },
    { label: 'District', name: 'District', type: 'number', placeholder: 'District' },
    { label: 'Pincode', name: 'Pincode', type: 'text', placeholder: 'Pincode' },
    { label: 'State', name: 'State', type: 'number', placeholder: 'State' },
    { label: 'Contact Number', name: 'ContactNumber', type: 'text', placeholder: 'Contact Number' },
    { label: 'Alt Contact Number', name: 'AltContactNumber', type: 'text', placeholder: 'Alt Contact Number' },
    { label: 'Created By', name: 'CreatedBy', type: 'number', placeholder: 'Created By' },
  ];

 
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      RecognizationNumber: [''],
      Name: [''],
      Code: [''],
      Email: [''],
      DateOfStart: [''],
      SubscriptionStartDate: [''],
      SubscriptionEndDate: [''],
      ActiveSubscription: [''],
      Address1: [''],
      Address2: [''],
      City: [''],
      District: [''],
      Pincode: [''],
      State: [''],
      ContactNumber: [''],
      AltContactNumber: [''],
      CreatedBy: [''],
    });

    this.updateCols();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateCols();
  }

  updateCols() {
    const width = window.innerWidth;

    if (width < 768) {
      this.cols = 1;
    } else {
      this.cols = 4;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post(this.apiUrl, this.form.value).subscribe(response => {
        console.log('Organization created successfully!', response);
      }, error => {
        console.error('Error creating organization:', error);
      });
    } else {
      console.log('Form is not valid');
    }
  }
}