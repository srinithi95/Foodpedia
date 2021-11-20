import React from "react";
import "./Filter.css";
<link rel="stylesheet" href="stylesheet.css"></link>
const Restaurant = ({handleTagChange,selectedTag}) => {
    // reference was https://codesandbox.io/s/react-ecommerce-forked-wp1x1?file=/src/components/core/filter/Filter.jsx
    // access date was 11/19/21. 
    let tagNames = ["All", "Noodle", "Rich Dishes", "Egg Rolls"];
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-9">
              <p className=" mr-2">
                Filters: <span className="mr-4"></span>
                {tagNames.map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`btn mr-2 custom-filter ${
                      selectedTag === tag
                        ? "btn-secondary"
                        : "btn-outline-secondary"
                    }`}
                    //onClick={(e) => handleTagChange(e.target.value)}
                    value={tag}
                  >
                    {tag}
                  </button>
                ))}
              </p>
            </div>
            <div className="col-12 col-md-3">
 
            </div>
          </div>
        </div>
      );
    }
export default Restaurant
