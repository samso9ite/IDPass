import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // <link
    //   rel="preload"
    //   href="/fonts/Inter-roman.var.woff2"
    //   as="font"
    //   type="font/woff2"
    //   crossOrigin="anonymous"
    //   key="interFont"
    // />,
    <>
    <link
  rel="stylesheet"
  type="text/css"
  // charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
/>
  </>
  ])
}