package com.margelo.nitro.samsungpayreactnative
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class SamsungPayReactNative : HybridSamsungPayReactNativeSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
