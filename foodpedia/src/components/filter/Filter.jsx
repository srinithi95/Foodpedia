import React from "react";
import "./Filter.css";

function Filter({ handleSort, handleTagChange, selectedTag, sortBy }) {
  let tagNames = ["Noodle", "Rich Dishes", "Egg Rolls"];
 
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-9">
          
          <p className=" mr-2" style={{textAlign:'left',marginLeft:'7rem'}}>

          <p> </p>{["All"].map((all, idx) => (
              <button
              style={{marginRight:10,width:'7rem', border: 'none'}}
                key={idx}
                type="button"
                className={`btn mr-2 custom-filter ${
                  selectedTag === all
                    ? "btn-secondary"
                    : "btn-outline-secondary"
                }`}
                onClick={(e) => handleTagChange(e.target.value)}

              >
                {all}
              </button>
            ))} 

            { /* This displays certain items for certain buttons. */
            tagNames.map((tag, idx) => (
              <button
                key={idx}
                style={{margin:10,width:'7rem', border: 'none'}}
                type="button"
                className={`btn mr-2 custom-filter ${
                  selectedTag === tag
                    ? "btn-secondary"
                    : "btn-outline-secondary"
                }`}
                onClick={(e) => handleTagChange(e.target.value)}
                value={tag}
              >
                {tag}
              </button>
            ))}
 


 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
