import React, { useState } from "react"
import Title from "../globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

const Menu = ({ items }) => {
  const [state, setstate] = useState({
    items: items.edges,
    coffeeItems: items.edges,
    categories: getCategories(items.edges),
  })

  const handleItems = category => {
    let tempItems = [...state.items]
    if (category === "all") {
      setstate(prevItems => {
        return {
          ...prevItems,
          coffeeItems: tempItems,
        }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      setstate(prevItems => {
        return {
          ...prevItems,
          coffeeItems: items,
        }
      })
    }
  }

  return (
    <React.Fragment>
      {state.items.length === 0 && (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display.</h1>
              </div>
            </div>
          </div>
        </section>
      )}
      {state.items.length > 0 && (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small className="font-weight-bold">
                            {node.title}
                          </small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  )
}

export default Menu
