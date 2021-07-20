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

const LikeSVG = ({color, size}: SVGProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 60 52.944">
      <AnimatedPath
        d="M27.1,48l-.7-.583c-1.1-.915-2.59-1.925-4.3-3.095C15.285,39.679,5,32.661,5,21.469a12.57,12.57,0,0,1,22.1-8.1,12.57,12.57,0,0,1,22.1,8.1c0,11.192-10.285,18.209-17.092,22.854-1.718,1.17-3.2,2.18-4.3,3.095Z"
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

export default LikeSVG;
