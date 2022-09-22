import * as React from "react";
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          data-name="Rectangle 6351"
          fill={props.fill}
          d="M0 0h19.886v19.87H0z"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 7839" opacity={0.5}>
      <Path data-name="Rectangle 6350" fill="none" d="M0 0h24v24H0z" />
      <G data-name="Group 7835">
        <G
          data-name="Group 7834"
          clipPath="url(#a)"
          fill={props.fill}
          transform="translate(2 2)"
        >
          <Path
            data-name="Path 20998"
            d="M2.403 19.869c.049-.065.119-.038.18-.038h14.624c.067 0 .144-.031.2.037Z"
          />
          <Path
            data-name="Path 20999"
            d="M18.886 12.229a.751.751 0 0 0-1.018-.462.715.715 0 0 0-.443.727v5.485c0 .458-.018.476-.483.476h-3.585c-.311 0-.313 0-.313-.312v-4.768a1.369 1.369 0 0 0-.061-.478.7.7 0 0 0-.675-.487H7.54a.694.694 0 0 0-.638.4 1 1 0 0 0-.1.507v4.884c0 .239-.016.256-.25.256h-3.78c-.3 0-.345-.053-.35-.354V10.539c.006-.181.025-.2.192-.148.037.011.073.025.111.036A3.783 3.783 0 0 0 5.5 10.2a3.582 3.582 0 0 0 1.274-.991c.133-.166.137-.162.281.007a4.073 4.073 0 0 0 .365.374 3.736 3.736 0 0 0 5.4-.354c.144-.172.174-.175.307-.006a3.3 3.3 0 0 0 .715.65 3.78 3.78 0 0 0 4.928-.442 3.834 3.834 0 0 0 .992-3.738c-.284-1.267-.639-2.517-.949-3.778-.062-.251-.12-.5-.189-.752A1.57 1.57 0 0 0 17.1 0Q9.9.009 2.714 0a1.333 1.333 0 0 0-.584.108 1.7 1.7 0 0 0-.952 1.2Q.812 2.789.44 4.264A13.638 13.638 0 0 0 0 6.224v.233a.3.3 0 0 1 0 .233v.426c.04.058.019.126.025.188a3.864 3.864 0 0 0 .7 1.684 1.186 1.186 0 0 1 .194.67C.909 12.5.917 15.34.906 18.181a1.641 1.641 0 0 0 1.381 1.689H2.4a.4.4 0 0 1 .209-.019h14.585a.4.4 0 0 1 .209.019h.078a1.6 1.6 0 0 0 .593-.146 1.693 1.693 0 0 0 .858-1.549c.006-1.854 0-3.708 0-5.563a1.239 1.239 0 0 0-.051-.383M13.827 1.376q1.549.01 3.1 0a.293.293 0 0 1 .34.256c.382 1.55.795 3.093 1.154 4.649a2.403 2.403 0 1 1-4.74.792 3.725 3.725 0 0 1-.028-.444V1.555c0-.146.036-.181.181-.18m-6.012 0q2.151.011 4.3 0c.144 0 .181.033.18.179-.008.891 0 1.783 0 2.674 0 .878.013 1.757 0 2.635a2.392 2.392 0 0 1-1.78 2.228 2.315 2.315 0 0 1-2.807-1.735 3.005 3.005 0 0 1-.08-.709V1.57c0-.142.023-.195.184-.194M1.435 7.248A2.459 2.459 0 0 1 1.451 6.1l1.115-4.44c.062-.245.1-.278.36-.278h3.138c.149 0 .179.042.178.183-.007.878 0 1.756 0 2.634v2.46a2.442 2.442 0 0 1-2.293 2.5 2.469 2.469 0 0 1-2.51-1.908m9.978 11.267q-1.492-.009-2.983 0c-.143 0-.166-.046-.166-.175q.007-2.16 0-4.32c0-.131.029-.176.169-.175q1.491.009 2.983 0c.144 0 .167.051.166.178-.005.723 0 1.446 0 2.169v2.15c0 .134-.032.173-.17.172"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
