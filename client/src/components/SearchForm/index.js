import React from "react";


function SearchForm(props) {
  // console.log(props)
  return (
    <div clasName="container">
      <form >
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <label className="form-label">Search Here</label>
            <input for="inputPassword6" onChange={(event) => {
              event.preventDefault();
              // console.log("banana")
              props.loadBooks(event)
            }
            } placeholder='Search' type="text" className="form-control" id="exampleInput" aria-describedby="" />

          </div>
          <div className="col-md-4"></div>
        </div>
      </form>
    </div>
  )
}
export default SearchForm;

