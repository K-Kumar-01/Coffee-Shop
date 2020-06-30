import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../globals/Title"

const getProducts = graphql`
  query {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxWidth: 426) {
                src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  const { products } = useStaticQuery(getProducts)
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our" subtitle="Products" />
        <div className="row">
          {products.edges.map(({ node }) => {
            return <Product product={node} key={node.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
