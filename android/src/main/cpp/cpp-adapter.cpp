#include <jni.h>
#include "samsungpayreactnativeOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::samsungpayreactnative::initialize(vm);
}
