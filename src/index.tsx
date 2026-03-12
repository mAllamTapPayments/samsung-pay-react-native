import { NitroModules } from 'react-native-nitro-modules';
import type { SamsungPayReactNative } from './SamsungPayReactNative.nitro';

const SamsungPayReactNativeHybridObject =
  NitroModules.createHybridObject<SamsungPayReactNative>('SamsungPayReactNative');

export function multiply(a: number, b: number): number {
  return SamsungPayReactNativeHybridObject.multiply(a, b);
}
