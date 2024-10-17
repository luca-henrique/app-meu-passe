import { Platform } from 'react-native';
import KeyboardAvoidingViewAndroid from './KeyboardAvoidingViewAndroid';
import { IOSKeyboardAvoidingView } from './KeyboardAvoidingViewIOS';

const KeyboardAvoidingView =
  Platform.OS === 'ios' ? IOSKeyboardAvoidingView : KeyboardAvoidingViewAndroid;

export default KeyboardAvoidingView;
