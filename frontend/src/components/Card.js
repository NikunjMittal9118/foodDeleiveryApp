import React from 'react'

const Card = () => {
  return (
    <>
        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is some random text. This is description.</p>
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} >
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              Total price
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  )
}

export default Card