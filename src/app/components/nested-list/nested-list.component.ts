import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
  selector: 'nested-list',
  templateUrl: './nested-list.component.html',
  styleUrls: ['./nested-list.component.css']
})
export class NestedListComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() id: string;
	//@Input() dataList: object;

	@ViewChild('nl', { read: ElementRef , static: true}) el: ElementRef;

  constructor() { }

  ngOnInit() {
    var array = ["<ul>"];

    function printList(items) {

      switch (Object.prototype.toString.call(items).replace(/^\[object (.+)\]$/, '$1').toLowerCase()) {

        case "object":

          getChildren(items);
          break;

        case "string":

          array.push("<li>" + items + "</li>");
          break;

        case "array":

          printArray(items);
          break;

      }

    }

    function getChildren(parent) {

      for (var child in parent) {
          
        array.push("<li>" + child + "<ul>");
        printList(parent[child]);
        array.push("</ul></li>");

      }

    }

    function printArray(myArray){

      for(var i = 0; i < myArray.length; i++){

        array.push("<li>" + myArray[i] + "</li>");

      }

    }

    printList({"Home": { "Home__Sub": ["home--1", "home--2", "home--3"]}, "About": ["about--1", "about--2", "about--3"], "Contact": ["contact--1", "contact--2", "contact--3"]});

    array.push("<ul>");

    document.getElementById(this.id).innerHTML = array.join("");

  }

}
