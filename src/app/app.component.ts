import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'app';
  myGroup;
 
  private selectionBoxValues: Array<any> = [
    { Selection: "Jan", name: "January" },
    { Selection: "Feb", name: "February" },
    { Selection: "Mar", name: "March" },
    { Selection: "Apr", name: "April" },
    { Selection: "May", name: "May" }
  ];
  public headerRowsArray: Array<any> = [];
  public rowData: Array<any> = [];
  ngOnInit() {
    this.headerRowsArray = [

      {
        columnName: "String",
        width: "100px",
        modelId: "String",
        sort: false,
        editable: true,
        type: "",
        columnColor: 'pink', textColor: 'blue',
        columnHeaderColor: 'lightcyan', textHeaderColor: 'blue',
      }, {
        columnName: "Selection",
        width: "100px",
        modelId: "Selection",
        sort: false,
        editable: true,
        type: "select",
        values: this.selectionBoxValues,
        displayId: "name"
      }, {
        columnName: "Time",
        width: "100px",
        modelId: "Time",
        sort: false,
        editable: true,
        type: "time",
        columnHeaderColor: 'aqua',
      }, {
        columnName: "DateMaxSet", textColor: 'blue',
        width: "110px",
        modelId: "DateMaxSet", visible: true,
        sort: false,
        editable: true,
        type: "date",
        setMaxDate: true
      },
      {
        columnName: "DateMinSet",
        width: "110px",
        modelId: "DateMinSet",
        sort: false,
        editable: true,
        type: "date",
        setMinDate: true,
        columnHeaderColor: 'blueviolet',
        textHeaderColor: 'antiquewhite',
      }, { columnName: "Number", width: "100px", columnColor: 'lightgreen', modelId: "Number", sort: true, type: "number" },
      {
        columnName: "CheckBox", width: "100px", modelId: "CheckBox", editable: true,
        sort: false, type: "checkbox"
      },
      {
        columnName: "Button",
        width: "100px",
        modelId: "Button",
        sort: false,
        type: "button", hasSubRows: true, subRows: this.selectionBoxValues
      },
    ];

    this.rowData = [{
      Number: 1,
      String: 'Ashish',
      DateMaxSet: this.currentDate(),
      DateMinSet: this.currentDate(),
      Button: 'myButton',
      Selection: '',
      CheckBox: true,
      Time: this.getCurrentTime(),
      colorCellWithModelId: 'Number',
      colorCell: 'white',
      textColorCell: 'red'
    }, {
      Number: 2,
      String: 'Kuldeep',
      DateMaxSet: this.currentDate(),
      DateMinSet: this.currentDate(),
      Button: 'myButton',
      Selection: '',
      CheckBox: '',
      Time: this.getCurrentTime(),
      colorCellWithModelId: 'Number',
      colorCell: 'lightblue',
      textColorCell: 'red'
    }, {
      Number: 3,
      String: 'Naresh',
      DateMaxSet: this.currentDate(),
      DateMinSet: this.currentDate(),
      Button: 'myButton',
      Selection: '',
      CheckBox: true,
      Time: this.getCurrentTime(),
      colorCellWithModelId: 'Number',
      colorCell: 'yellow',
      textColorCell: 'red'
    }, {
      Number: 123,
      String: 'Jasmine',
      DateMaxSet: this.currentDate(),
      DateMinSet: this.currentDate(),
      Button: 'myButton',
      Selection: '',
      CheckBox: '',
      Time: this.getCurrentTime(),
      colorCellWithModelId: 'Number',
      colorCell: 'lightgrey',
      textColorCell: 'red',
      colorRow: 'chartreuse',
      textColorRow: 'red',
    },
    {
      String: 'Aladdin',
      DateMaxSet: this.currentDate(),
      DateMinSet: this.currentDate(),
      Button: 'myButton',
      Selection: '',
      CheckBox: '',
      Number: 424,
      Time: this.getCurrentTime(),
    }, {
      Number: 126,
      String: 'Alex',
      DateMaxSet: this.currentDate(),
      DateMinSet: this.currentDate(),
      Button: 'myButton',
      Selection: '',
      CheckBox: '',
      Time: this.getCurrentTime(),
    }];

  }
  public leftColumnType: string = 'slno';
  public currentDate(): string {
    var todayDate = new Date();
    var dd = '' + todayDate.getDate();
    if (todayDate.getDate() < 10)
      dd = '0' + todayDate.getDate();
    var mm = '' + (todayDate.getMonth() + 1);
    if ((todayDate.getMonth() + 1) < 10)
      mm = '0' + (todayDate.getMonth() + 1);

    return mm + '-' + dd + '-' + todayDate.getFullYear();
  }
  public getCurrentTime(): string {
    var todayDate = new Date();
    var hh = '' + todayDate.getHours();
    if (todayDate.getHours() < 10)
      hh = '0' + todayDate.getHours();
    var min = '' + todayDate.getMinutes();
    if (todayDate.getMinutes() < 10)
      min = '0' + todayDate.getMinutes();
    var sec = '' + todayDate.getSeconds();
    if (todayDate.getSeconds() < 10)
      sec = '0' + todayDate.getSeconds();

    return hh + ':' + min + ':' + sec;
  }
  onRowSelection(rows) {
    console.log(rows);
  }

  onValueChanged(value) {
    console.log(value);

  }
  onColumnClicked(value) {
    console.log(value);
  }
}