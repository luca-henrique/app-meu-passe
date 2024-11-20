import { Platform } from 'react-native';
import KeyboardAvoidingViewAndroid from './KeyboardAvoidingViewAndroid';
import { IOSKeyboardAvoidingView } from './KeyboardAvoidingViewIOS';

export const KeyboardAvoidingView =
  Platform.OS === 'ios' ? IOSKeyboardAvoidingView : KeyboardAvoidingViewAndroid;

