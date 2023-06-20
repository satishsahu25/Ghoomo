import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

const Home = () => {
  const navigation = useNavigation();

  //What to show or not of screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* first section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text>
          We are going to learn how to create a realtime mobile application
          using react native expo, tailwindcss along with live api integrations
          with Google Places API
        </Text>
      </View>

      {/* Circular view */}
      <View
        className="w-[300px] h-[300px] bg-[#00BCC9] 
       rounded-full absolute bottom-36 -right-36"
      ></View>
      <View
        className="w-[300px] h-[300px] bg-[#e5881e] 
       rounded-full absolute -bottom-28 -left-36"
      ></View>

      {/* image container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          source={HeroImage}
          animation="pulse"
          easing="ease-in-out"
          className="w-full h-full object-cover mt-20"
        />

        <TouchableOpacity 
        onPress={()=>navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#008CC9] rounded-full items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing={"ease-in-out"}
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full
          bg-[#008CC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
