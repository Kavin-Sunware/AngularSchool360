import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-data-grid',
  templateUrl: './school-data-grid.component.html',
  styleUrls: ['./school-data-grid.component.scss'],
})
export class SchoolDataGridComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  columns: {
    name: string;
    label: string;
  }[] = [
    { name: 'recognizationNumber', label: 'Recognition Number' },
    { name: 'name', label: 'Name' },
    { name: 'code', label: 'Code' },
    { name: 'email', label: 'Email' },
    { name: 'dateOfStart', label: 'Start Date' },
    { name: 'address1', label: 'Address 1' },
    { name: 'address2', label: 'Address 2' },
    { name: 'city', label: 'City' },
    { name: 'district', label: 'District' },
    { name: 'pincode', label: 'Pincode' },
    { name: 'state', label: 'State' },
    { name: 'contactNumber', label: 'Contact Number' },
    { name: 'altContactNumber', label: 'Alternate Contact Number' },
  ];

  displayedColumns = this.columns.map((column) => column.name);

  API_URL = 'https://school360api.azurewebsites.net';
  apiUrl = `${this.API_URL}/api/Organizations/GetOrganization`;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getOrganizations();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getOrganizations() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  applyGlobalFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  navigateToCreateOrganization() {
    this.router.navigate(['/create-organization']);
  }
}
