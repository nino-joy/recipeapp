import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, {Path, PathProps} from 'react-native-svg';
import {SVGProps} from './types';

const AnimatedPath = Animated.createAnimatedComponent(
  Path,
) as any as React.ComponentClass<
  Animated.AnimateProps<{}, PathProps & {style?: any}>
>;

Animated.addWhitelistedNativeProps({
  stroke: true,
});

const HomeSVG = ({color, size}: SVGProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 50 54.166">
      <AnimatedPath
        d="M39.5,43h-9A2.5,2.5,0,0,1,28,40.5v-9a2,2,0,0,0-2-2H22a2,2,0,0,0-2,2v9A2.5,2.5,0,0,1,17.5,43h-9A2.5,2.5,0,0,1,6,40.5V21.413A7.5,7.5,0,0,1,8.859,15.52l14.212-11.2a1.5,1.5,0,0,1,1.857,0l14.214,11.2A7.5,7.5,0,0,1,42,21.411V40.5A2.5,2.5,0,0,1,39.5,43Z"
        stroke={color}
        strokeWidth={5}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeSVG;
