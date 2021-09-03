import React, { Component } from "react";
import data from "../data/stock.json"
 
class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newStockData: [],
      oldStockData: []
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

    let stockData = data;

    let displayStock = () =>{
      var item = stockData[Math.floor(Math.random()*stockData.length)];

      let arr = item.match(/[^[\]"?]+/g);

      let newArray = arr.filter(function(ele, index, re){
        return ele != ",";
      });

      var newObject = newArray.map(function(ele, index){
        var actualArrayObject = {
          "stockName": ele.split(",")[0],
          "stockPrice": ele.split(",")[1],
          "flag": "neutal",
          "id": index+1
        }
        return actualArrayObject;
      })

      // Arrange in order for array of objects
      var sortArrayObject = newObject.sort(function(a, b) {
        return a.stockName.localeCompare(b.stockName)
      })
      
      // Remove duplicate
      var sortArrayObject2 = sortArrayObject.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.stockName === thing.stockName
        ))
      )
      //var sortArrayObject2 = new Set(sortArrayObject);
      console.log(sortArrayObject2);
      
      if(this.state.oldStockData.length == 0) {
        this.setState({
          newStockData: sortArrayObject2,
          oldStockData: sortArrayObject2 
        })
        //console.log(sortArrayObject2);
        //console.log(this.state.oldStockData);
      } else {
        //console.log("------------new data--------")
        //console.log(sortArrayObject2);
        //console.log(this.state.oldStockData);
        //console.log("------------End data--------")

        console.log(this.state.oldStockData);

        for(let i=0; i<this.state.oldStockData.length; i++) {
          for(let j=0; j<sortArrayObject2.length; j++) {
            if(sortArrayObject2[j].stockName === this.state.oldStockData[i].stockName) {
              if(parseInt(this.state.oldStockData[i].stockPrice) > parseInt(sortArrayObject2[j].stockPrice)) {
                this.state.oldStockData[i].flag = "red";
                this.state.oldStockData[i].stockPrice = sortArrayObject2[j].stockPrice;
              } else {
                this.state.oldStockData[i].flag = "green";
                this.state.oldStockData[i].stockPrice = sortArrayObject2[j].stockPrice;
              }
            } else {
              console.log(sortArrayObject2[j].stockName);
            }
          }
        }

        this.setState({
          newStockData: sortArrayObject2,
          oldStockData: this.state.oldStockData 
        })

      }
        

    }








    if(triggerInterval) {
      setInterval(displayStock, 2000);
    } else {
      displayStock();
    }
  }

  render() {
    return (
      <>
        <h2>Welcome to Home page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <br></br>
        <br></br>
        <br></br>
        
        <table>
          <tbody>
            <tr>
              <th>Company Names</th>
              <th>Share Price</th>
              <th>Up or Down</th>
            </tr>
            {this.state.oldStockData.map(target=>(
              <tr key={target.id} >
                <td>{target.stockName}</td>
                <td>{target.stockPrice}</td>
                <td>{target.flag}</td>
              </tr>
            ))}            
          </tbody>
        </table>
      
      </>
    );
  }
}
 
export default Home;