import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
// export default function BackgroundSection({
//   img,
//   styleClass,
//   title,
//   children,
// }) {
//   return (
//     <BackgroundImage className={styleClass} fluid={img}>
//       <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
//         {title}
//       </h1>
//       {children}
//     </BackgroundImage>
//   )
// }

const BackgroundSection = ({ img, className, title, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title || "default title"}
      </h1>
      {children}
    </BackgroundImage>
  )
}

export default styled(BackgroundSection)`
  min-height: ${props => (props.home ? "100vh" : "60vh")};
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 158, 9, 0.5), rgba(255, 158, 9, 0.5));
  opacity: 1 !important;
  background-position: center;
  background-size: cover;
`
