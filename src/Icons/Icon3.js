import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path data-name="Rectangle 6347" fill={props.fill} d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
    <G data-name="Group 7841">
      <Path data-name="Rectangle 6343" fill="none" d="M0 0h24v24H0z" />
      <G data-name="Group 7831">
        <G
          data-name="Group 7830"
          clipPath="url(#a)"
          fill={props.fill}
          transform="translate(2 2)"
        >
          <Path
            data-name="Path 20992"
            d="M6.684-.001H2.55A2.476 2.476 0 0 0 .003 2.55v4.134A2.478 2.478 0 0 0 2.55 9.23q2.066.006 4.133 0A2.475 2.475 0 0 0 9.23 6.683q.006-2.067 0-4.133A2.474 2.474 0 0 0 6.684-.001m-.036 7.69H2.589a.953.953 0 0 1-1.048-1.054V2.553a.943.943 0 0 1 1.021-1.012h4.105a.947.947 0 0 1 1.026 1.033v4.082a.949.949 0 0 1-1.046 1.037"
          />
          <Path
            data-name="Path 20993"
            d="M6.68 10.769q-2.067-.005-4.133 0A2.475 2.475 0 0 0 0 13.319v4.137a2.477 2.477 0 0 0 2.55 2.545h4.134a2.476 2.476 0 0 0 2.544-2.55q.006-2.067 0-4.133a2.475 2.475 0 0 0-2.55-2.544m1.012 6.69a.942.942 0 0 1-1.011 1h-4.13a.941.941 0 0 1-1.01-1v-4.153a.94.94 0 0 1 1.011-1h4.13a.941.941 0 0 1 1.011 1v4.154"
          />
          <Path
            data-name="Path 20994"
            d="M19.997 13.317a2.476 2.476 0 0 0-2.547-2.547q-2.067-.006-4.133 0a2.475 2.475 0 0 0-2.547 2.546q-.006 2.067 0 4.133a2.476 2.476 0 0 0 2.546 2.548q2.067.006 4.133 0a2.476 2.476 0 0 0 2.548-2.547v-4.133m-1.538 4.145a.938.938 0 0 1-.989 1h-4.177a.934.934 0 0 1-.984-.976v-4.2a.935.935 0 0 1 .988-.973h4.154a.941.941 0 0 1 1.009 1v4.154"
          />
          <Path
            data-name="Path 20995"
            d="M15.363 9.23a4.613 4.613 0 1 0-4.594-4.675 4.618 4.618 0 0 0 4.594 4.675m.028-7.689a3.076 3.076 0 1 1-3.085 3.078 3.08 3.08 0 0 1 3.085-3.078"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default SvgComponent
