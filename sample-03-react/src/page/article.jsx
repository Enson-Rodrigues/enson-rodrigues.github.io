import React, { Component, useEffect, useState } from "react";
 
class Article extends Component {
  constructor(){
    super()

    this.state = {
      imgURL: 'https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif'
    }
  }

  render() {
    /*return "hello"*/

    return (
      <>
        <h2>Welcome to Article page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        {"Rs "+(10232100.032321312321).toLocaleString('en-IN', { minimumFractionDigits: 2})}
      </>
    );
  }
}


/*const Article = ()=> {
  const [myNameValue, setmyNameValue] = useState("Enson");
  
  return null
}*/

export default Article;