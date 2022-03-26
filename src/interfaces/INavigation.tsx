import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type NavigatorParamsList = {
  SignInScreen: undefined;
};

type RootNavigatorParamsList = {
  HomeScreen: undefined;
  HotelScreen: {
    hotelId: string;
  };
  RoomScreen: {
    hotelId: string;
    id: string;
  };
};

export interface ISignInScreenProps {
  navigation: StackNavigationProp<NavigatorParamsList, 'SignInScreen'>;
}

export interface IHomeScreen {
  navigation: StackNavigationProp<RootNavigatorParamsList, 'HomeScreen'>;
}

export interface IHotelScreen {
  navigation: StackNavigationProp<RootNavigatorParamsList, 'HotelScreen'>;
  route: RouteProp<RootNavigatorParamsList, 'RoomScreen'>;
}

export interface IRoomScreen {
  navigation: StackNavigationProp<RootNavigatorParamsList, 'RoomScreen'>;
  route: RouteProp<RootNavigatorParamsList, 'RoomScreen'>;
}
