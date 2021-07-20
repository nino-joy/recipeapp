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

const SettingsSVG = ({color, size}: SVGProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 45 45.707">
      <AnimatedPath
        d="M16.787,2l-.96,4.921a15.567,15.567,0,0,0-4.38,2.517L6.721,7.808,2.174,15.692l3.782,3.287a14.5,14.5,0,0,0,0,5.043L2.174,27.308l4.547,7.884,4.726-1.63a15.567,15.567,0,0,0,4.38,2.517L16.787,41h9.095l.96-4.921a15.567,15.567,0,0,0,4.38-2.517l4.726,1.63L40.5,27.308l-3.782-3.287a14.5,14.5,0,0,0,0-5.043L40.5,15.692,35.948,7.808l-4.726,1.63a15.567,15.567,0,0,0-4.38-2.517L25.882,2Zm4.547,11.7a7.8,7.8,0,1,1-7.8,7.8A7.8,7.8,0,0,1,21.335,13.7Z"
        stroke={color}
        strokeWidth={4}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SettingsSVG;
