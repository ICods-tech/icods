import React from 'react';
import {View, TouchableOpacity, Text, ColorValue} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../assets/images/back.svg';

interface HeaderProps {
  page: string;
  navigate: string;
  color?: ColorValue;
}

const Header = ({page, navigate, color}: HeaderProps): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(`${navigate}`);
        }}>
        <BackButton />
      </TouchableOpacity>
      <Text
        style={[
          styles.title,
          {
            color: color ? color : '#282C37',
          },
        ]}>
        {page}
      </Text>
    </View>
  );
};

export default Header;
