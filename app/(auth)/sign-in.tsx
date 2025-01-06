/* eslint-disable prettier/prettier */
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Linking, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px] " />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Log into your account
          </Text>
        </View>

        <View className="p-5 ">
          {/* <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setform({ ...form, name: value })}
          /> */}
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setform({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setform({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignInPress}
            className="mt-6"
          />
          {/* OAuth Button */}
          <OAuth />

          <View className="pt-5 items-center">
            <Link href="/sign-up">
              <View>
                <Text className="text-center text-gray-700">
                  Don't have an account?
                </Text>
                <Text className="text-primary-500 text-center font-bold">
                  Sign Up
                </Text>
              </View>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
