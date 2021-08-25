import React, { Component } from "react";
import useWebSocket, { ReadyState } from 'react-use-websocket';
 
class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      initialStockData: ""
    }
  }

  componentDidMount() {
    console.log("data initislised");
    this.stock();
  }

  stock = () => {
    /*let ws = new WebSocket("wss://stocks.mnet.website/"); 
    
    ws.onopen = function () {
      console.log(ws);
    };
    ws.onmessage = function (e) {
      console.log( e.data); //log the received message
    };*/
    let triggerInterval = true;

    let stockData = [
      "[[godrej,300.2],[tcs,1234.345],[datamatics,1023.345],[Mahindra & Mahindra Ltd,10.345],[SBI,431.231],[RIL,200.675],[ITC,3456.23]]",
      "[[datamatics,456.345],[godrej,346.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,10.345],[SBI,43.231],[RIL,200.675],[ITC,3456.23],[tcs,23.345]]",
      "[[Mahindra & Mahindra Ltd,1045.345],[datamatics,46.345],[godrej,346.23],[tcs,23.345],[datamatics,102.345],[SBI,43.231],[godrej,23.23],[RIL,200.675],[ITC,3456.23],[tcs,23.345]]",
      "[[tcs,23.345],[datamatics,102.345],[datamatics,49.345],[godrej,326.23],[tcs,93.345]]",
      "[[godrej,123.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,4900.345],[RIL,0.675],[ITC,5000.23],[tcs,1098.345]]",
      "[[ITC,4.23],[Mahindra & Mahindra Ltd,103.345]]",
      "[[godrej,34.233],[tcs,2.345],[datamatics,102.345],[godrej,34],[tcs,231.345],[datamatics,102.345],[godrej,34.23],[tcs,3.345],[datamatics,12.345]]",
      "[[godrej,123.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,102.345],[SBI,43.231],[RIL,2000.675],[ITC,3456.23]]",
      "[[datamatics,456.345],[godrej,346.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,10.345],[SBI,43.231],[RIL,200.675],[ITC,3456.23],[tcs,23.345]]",
      "[[Mahindra & Mahindra Ltd,1045.345],[datamatics,46.345],[godrej,346.23],[tcs,23.345],[datamatics,102.345],[SBI,43.231],[godrej,23.23],[RIL,200.675],[ITC,3456.23],[tcs,23.345]]",
      "[[tcs,23.345],[datamatics,102.345]]",
      "[[godrej,123.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,4900.345],[RIL,0.675],[ITC,5000.23],[tcs,1098.345]]",
      "[[ITC,4.23],[godrej,35.23],[abc,4567895.23]]",
      "[[godrej,324.245],[tcs,12.345],[datamatics,102.5],[godrej,341.23],[tcs,213.345],[datamatics,02.345],[godrej,3.23],[tcs,2.345],[datamatics,10.345]]",
      "[[godrej,123.23],[tcs,23.345],[datamatics,1021.345],[Mahindra & Mahindra Ltd,102.345],[SBI,43.231],[RIL,2000.675],[ITC,356.23]]",
      "[[datamatics,456.345],[godrej,346.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,10.345],[SBI,43.231],[RIL,200.675],[ITC,3456.23],[tcs,23.345]]",
      "[[Mahindra & Mahindra Ltd,1045.345],[datamatics,46.345],[godrej,346.23],[tcs,23.345],[datamatics,102.345],[SBI,43.231],[godrej,23.23],[RIL,200.675],[ITC,3456.23],[tcs,23.345]]",
      "[[tcs,23.345],[datamatics,102.345],[godrej,1.23]]",
      "[[godrej,123.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,4900.345],[RIL,0.675],[ITC,5000.23],[tcs,1098.345]]",
      "[[ITC,4.23],[RIL,400.675],[ITC,1256.23]]",
      "[[godrej,34.23],[tcs,2.345],[datamatics,10.345],[godrej,342.23],[tcs,234.345],[datamatics,10.345],[godrej,341.23],[tcs,23.345],[datamatics,102.345]]",
      "[[Mahindra & Mahindra Ltd,102.345],[godrej,123.23],[tcs,23.345],[datamatics,102.345],[SBI,43.231],[RIL,2000.675],[ITC,3456.23]]",
      "[[datamatics,456.345],[godrej,346.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,10.345],[SBI,43.231],[RIL,200.675],[ITC,3456.23],[tcs,23.345]]",
      "[[Mahindra & Mahindra Ltd,1045.345],[datamatics,46.345],[godrej,346.23],[tcs,23.345],[datamatics,102.345],[SBI,43.231],[godrej,23.23],[RIL,200.675],[ITC,3456.23],[tcs,23.345]]",
      "[[tcs,23.345],[datamatics,102.345]]",
      "[[RIL,0.675],[ITC,5000.23],[godrej,123.23],[tcs,23.345],[datamatics,102.345],[Mahindra & Mahindra Ltd,4900.345],[tcs,1098.345]]",
      "[[ITC,4.23],[tcs,18.345]]",
      "[[godrej,34.23],[tcs,2.345],[datamatics,102.345],[godrej,34.23],[tcs,23.345],[datamatics,102.345],[godrej,34.23],[tcs,23.345],[datamatics,102.345]]"
    ];

    let displayStock = () =>{
      var item = stockData[Math.floor(Math.random()*stockData.length)];
      //console.log(item);
      this.setState({
        initialStockData: item
      })
      //console.log(this.state)
      this.formateTheStockString(this.state);
    }

    if(triggerInterval) {
      setInterval(displayStock, 2000);
    } else {
      displayStock();
    }
    
  }

  formateTheStockString = (params) => {
    //console.log(params);
    var myArray = [];

    // Match returns and array of elements
    let arr = params.initialStockData.match(/[^[,\]"?]+/g);
    console.log(arr);

    arr.map(function(ele, index, arr){
      if(index%2){
      }
    })


  }


  render() {
    return (
      <>
        <h2>Welcome to Home page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <br></br>
        <p>{this.state.initialStockData}</p>
        <br></br>
        <br></br>
        <table>
          <tbody>
            <tr>
              <th>Company Names</th>
              <th>Share Price</th>
              <th>Up or Down</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
 
export default Home;