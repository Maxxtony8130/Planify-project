import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path data-name="Path 867" d="M0 0h24v24H0Z" fill="none" />
    <Path
      data-name="Path 868"
      d="M7.457 10.978a12.792 12.792 0 0 0 5.565 5.565l1.858-1.858a.84.84 0 0 1 .861-.2 9.633 9.633 0 0 0 3.015.481.847.847 0 0 1 .844.844v2.947a.847.847 0 0 1-.844.844A14.354 14.354 0 0 1 4.4 5.244a.847.847 0 0 1 .844-.844H8.2a.847.847 0 0 1 .844.844 9.593 9.593 0 0 0 .481 3.015.847.847 0 0 1-.211.861Z"
      fill="#4d4f5c"
    />
  </Svg>
)

export default SvgComponent