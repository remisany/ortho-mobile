import { usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { BackHandler, Platform } from "react-native";

export default function useBack() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (Platform.OS !== "android") return;

    const onBackPress = () => {
      console.log('useBakc')

      router.replace("/");
      return true;
    };

    const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => {
      subscription.remove();
    }
  }, [pathname]);
}