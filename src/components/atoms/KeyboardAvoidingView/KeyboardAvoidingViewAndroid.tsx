import React from 'react';

import {
  Platform,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from 'react-native';

import { KeyboardAvoidingViewCssProps, KeyboardAvoidingView as RNKeyboardAvoidingView } from './style';

import { getStatusBarHeight } from '../../../utils/dimesions';

const BEHAVIOR = Platform.OS === 'ios' ? 'padding' : undefined;

const KeyboardAvoidingView = ({ style, ...props }: RNKeyboardAvoidingViewProps & KeyboardAvoidingViewCssProps) => {
  const headerHeight = getStatusBarHeight(true);

  return (
    <RNKeyboardAvoidingView
      style={[style]}
      behavior={BEHAVIOR}
      keyboardVerticalOffset={headerHeight}
      {...props}
    />
  );
};



export default KeyboardAvoidingView;
