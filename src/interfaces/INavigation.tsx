import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type NavigatorParamsList = {
  SignInScreen: undefined;
};

type HotelNavigatorParamsList = {
  HomeScreen: undefined;
  HotelScreen: {
    hotelId: string;
  };
  RoomScreen: {
    hotelId: string;
    id: string;
  };
};

type ProfileNavigatorParamsList = {
  ProfileScreen: undefined;
};

export interface ISignInScreenProps {
  navigation: StackNavigationProp<NavigatorParamsList, 'SignInScreen'>;
}

export interface IHomeScreen {
  navigation: StackNavigationProp<HotelNavigatorParamsList, 'HomeScreen'>;
}

export interface IHotelScreen {
  navigation: StackNavigationProp<HotelNavigatorParamsList, 'HotelScreen'>;
  route: RouteProp<HotelNavigatorParamsList, 'RoomScreen'>;
}

export interface IRoomScreen {
  navigation: StackNavigationProp<HotelNavigatorParamsList, 'RoomScreen'>;
  route: RouteProp<HotelNavigatorParamsList, 'RoomScreen'>;
}

export interface IProfileScreen {
  navigation: StackNavigationProp<ProfileNavigatorParamsList, 'ProfileScreen'>;
}
