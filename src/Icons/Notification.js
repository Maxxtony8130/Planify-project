import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G data-name="Group 133">
      <G data-name="Group 132" fill="#4d4f5c">
        <Path data-name="Path 2569" d="M10.01 20.51a1.99 1.99 0 0 0 3.98 0Z" />
        <Path
          data-name="Path 2570"
          d="M12 5.5a5 5 0 0 1 5 5v7H7v-7a5 5 0 0 1 5-5ZM12 1a1.5 1.5 0 0 0-1.5 1.5v1.17A6.993 6.993 0 0 0 5 10.5v6l-2 2v1h18v-1l-2-2v-6a6.993 6.993 0 0 0-5.5-6.83V2.5A1.5 1.5 0 0 0 12 1Z"
        />
      </G>
      <Path data-name="Rectangle 75" fill="none" d="M0 0h24v24H0z" />
    </G>
  </Svg>
)

export default SvgComponent