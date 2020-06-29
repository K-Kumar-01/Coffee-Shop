import React from "react"

const Title = ({ title, subtitle }) => {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="display-4 font-weight-bold text-capitalize">
          <span className="text-yellow">{title}</span> {subtitle}
        </h1>
      </div>
    </div>
  )
}

export default Title
