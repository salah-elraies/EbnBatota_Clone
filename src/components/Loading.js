import React from 'react'

const Loading = () => {
 return (
  <div className="loader" style={{
      "position": "fixed",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "top": 0,
      "left": 0,
      "width": "100%",
      "height": "100%",
      "background": "#fff",
      "color": "#555"
  }}>
    <h1 style={{"fontSize": 60, "fontWeight": "bold"}}>LOADING ...</h1>
  </div>
 )
}

export default Loading
