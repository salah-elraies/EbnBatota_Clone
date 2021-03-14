import React, {useState, useEffect} from 'react'
import "./Booking.css"

function Booking({albumId, idReal}) {
  const [adultVal, setAdultVal] = useState(parseInt(`${albumId}${idReal}`))
  const [childVal, setChildVal] = useState(parseInt(`${albumId}${idReal}`) * 6 / 10)
  const [adultIndex, setAdultIndex] = useState(1)
  const [childIndex, setChildIndex] = useState(0)
  useEffect(()=>{
    setAdultVal(adultIndex * parseInt(`${albumId}${idReal}`))
    setChildVal(childIndex * parseInt(`${albumId}${idReal}`) * 6 / 10)
  }, [adultIndex, childIndex])
    return (
      <div className="bala7 " style={{"color": "#555"}}>
        <div className="innerForm">
          <h3>- Booking -</h3>
          <form method="post" action="https://www.ebnbatota.com/booking">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Adults</label>
                  <div className="numbers-row">
                    <input 
                      type="text" 
                      value={adultIndex} 
                      className="qty2 form-control" 
                      name="UE_Adults" 
                      onChange={(e) => setAdultIndex(e.target.value)}
                      />
                    <div className="inc button_inc" onClick={()=> setAdultIndex(adultIndex + 1)}>+</div>
                    <div className="dec button_inc" onClick={()=> setAdultIndex(adultIndex >= 1 ? adultIndex - 1 : 0)}>-</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                  <div className="form-group">
                      <label>Children</label>
                      <div className="numbers-row adult-number">
                          <input 
                            type="text" 
                            value={childIndex} 
                            className="qty2 form-control" 
                            name="UE_Children" 
                            onChange={(e) => setChildIndex(e.target.value)}
                            />
                          <div className="inc button_inc" onClick={()=> setChildIndex(childIndex + 1)}>+</div>
                          <div className="dec button_inc" onClick={()=> setChildIndex(childIndex >= 1 ? childIndex - 1 : 0)}>-</div>
                      </div>
                  </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <div ><label>Date</label></div>
                  <div className="styled-select-filters" >
                    <select name="UE_Date">
                      <option value="11/03/2021" defaultValue>11/03/2021 </option>
                      <option value="18/03/2021">18/03/2021 </option>
                      <option value="25/03/2021">25/03/2021 </option>
                      <option value="01/04/2021">01/04/2021 </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <table className="table table_summary">
              <tbody>
                <tr>
                  <td>
                      Adults
                  </td>
                  <td id="adultsNumber1" className="text-right">
                    {adultIndex >= 0 ? adultIndex : 0}
                  </td>
                </tr>
                <tr>
                  <td>
                      Children
                  </td>
                  <td id= "childrenNumber1" className="text-right">
                      {childIndex >= 0 ? childIndex : 0}
                  </td>
                </tr>
                <tr className="total">
                  <td>
                      Total cost
                  </td>
                  <td id="cost1" className="text-right">
                      {adultVal + childVal}
                  </td>
                </tr>
                </tbody>
              </table>
            <a type="submit" className="btn_full" href="/">book</a>
          </form>
        </div>
      </div>
    )
}

export default Booking

