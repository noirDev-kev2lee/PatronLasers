import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';
import ProductHome from './ProductHome';
import TabsAds from './TabAds';
import TabCustomer from './TabCustomer';
import TabGuide from './TabGuide';
import TabSupport from './TabSupport';
function Feed({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();
function CustomDrawerContent({props}: {props: any}) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const screenOptions = ({route}: {route: {name: string}}) => ({
  tabBarIcon: ({color, size}: {color: string; size: number}) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Advertisement':
        iconName = 'globe';
        break;
      case 'Clinical Guides':
        iconName = 'medkit';
        break;
      case 'My Customer':
        iconName = 'users';
        break;
      case 'Tech Support':
        iconName = 'cogs';
        break;
      default:
        iconName = 'home';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#222',
  tabBarInactiveTintColor: '#999',
  headerStyle: {height: 40, backgroundColor: '#fff'},
  headerTintColor: '#222',
  headerShadowVisible: true,
  headerTitleAlign: 'center',
  tabBarShowLabel: false,
});

const Product = () => {
  const route = useRoute();
  const data = route.params as {username: string; lastname: string};
  const {username, lastname} = data;

  return (
    <View style={styles.container}>
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tab.Screen name="Advertisement" component={TabsAds} />
        <Tab.Screen name="Clinical Guides" component={TabGuide} />
        <Tab.Screen
          name="Home"
          component={ProductHome}
          initialParams={{username: username}}
        />
        <Tab.Screen
          name="My Customer"
          component={TabCustomer}
          initialParams={{username: username}}
        />
        <Tab.Screen
          name="Tech Support"
          component={TabSupport}
          initialParams={{username: username, lastname: lastname}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Product;
