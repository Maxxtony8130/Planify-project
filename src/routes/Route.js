import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Startup from "../screens/Startup";
import Market from "../screens/Market";
import Discover from "../screens/Discover";
import PostScreen from "../screens/PostScreen";
import Basket from "../screens/Basket";
import Rocket from "../Icons/Icon1";
import Icon2 from "../Icons/Icon2";
import Icon3 from "../Icons/Icon3";
import Icon4 from "../Icons/Icon4";
import Bag from "../Icons/Bag";

const Tab = createBottomTabNavigator();

const route = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { height: 56 },
        }}
      >
        <Tab.Screen
          name="Startup"
          component={Startup}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Rocket
                  width={24}
                  height={24}
                  fill={focused ? "#E90075" : "#4D4F5C"}
                />
                <Text
                  style={{
                    color: focused ? "#E90075" : "#4D4F5C",
                    fontSize: 12,
                  }}
                >
                  Startup
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Market"
          component={Market}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon2
                  width={24}
                  height={24}
                  fill={focused ? "#E90075" : "#4D4F5C"}
                />
                <Text
                  style={{
                    color: focused ? "#E90075" : "#4D4F5C",
                    fontSize: 12,
                  }}
                >
                  Market
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="PostScreen"
          component={PostScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    backgroundColor: "#E90075",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 50,
                  }}
                >
                  <Bag width={29} height={29} fill="#fff" />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon3
                  width={24}
                  height={24}
                  fill={focused ? "#E90075" : "#4D4F5C"}
                />
                <Text
                  style={{
                    color: focused ? "#E90075" : "#4D4F5C",
                    fontSize: 12,
                  }}
                >
                  Discover
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon4
                  width={24}
                  height={24}
                  fill={focused ? "#E90075" : "#4D4F5C"}
                />
                <Text
                  style={{
                    color: focused ? "#E90075" : "#4D4F5C",
                    fontSize: 12,
                  }}
                >
                  Basket
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default route;

const styles = StyleSheet.create({});
