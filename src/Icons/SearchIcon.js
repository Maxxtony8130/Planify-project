import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G data-name="Group 8016">
      <Path data-name="Rectangle 7049" fill="none" d="M0 0h24v24H0z" />
      <Path
        d="m16.036 14.738 4.9 4.9a.92.92 0 1 1-1.3 1.3l-4.9-4.9a7.28 7.28 0 1 1 1.3-1.3Zm-5.755 1a5.46 5.46 0 1 0-5.46-5.46 5.46 5.46 0 0 0 5.46 5.462Z"
        fill="#4d4f5c"
        fillRule="evenodd"
      />
    </G>
  </Svg>
)

export default SvgComponent
