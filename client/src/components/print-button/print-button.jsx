import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

import "./print-button.css";

class PrintButton extends Component {
  constructor() {
    super();

    this.printDiv = this.printDiv.bind(this);
  }

  printDiv(e) {
    this.mode = "print";

    const styles = `html,

    .home-page{
        width: 100vw;
    }
    .table{
        border: 1px solid black;
        margin: 10px auto;
        width: 90%;
    }
    thead tr th{
      border: 1px solid black;
      background-color: #444;
      color: white;
    }
     th{
        border: 1px solid #ccc;
    }
    td{
      text-align: center;
      border: 1px solid #ccc;
    }
    
    .not-print{
       background-color: red;
       display: none;
    }
    `;
    console.log("works");
    e.preventDefault();
    let printContent = document.getElementById("homepage").innerHTML;
    let a = window.open("", "Print", "height=700, width=1000");
    a.document.write("<html><head><title>Print</title>");
    a.document.write(`<style>${styles}</style>`);
    a.document.write("</head><body > <h1> Print customers contacts <br>");
    a.document.write(printContent);
    a.document.write("</body></html>");
    a.document.close();
    a.window.print();
    return true;
  }
  render() {
    return (
      <>
        <button className="print-button" value="click" onClick={this.printDiv}>
          <FontAwesomeIcon className="print-icon" icon={faPrint} /> Print
        </button>
      </>
    );
  }
}

export default PrintButton;
