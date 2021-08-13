import React from 'react';
import { Text, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import IconGift from '../../assets/images/Icons/editor/gift-open.svg'
import { useNavigation } from '@react-navigation/native';

const GiftOpen = () =>
{
  const navigation = useNavigation();
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.icon }>
        <IconGift />
      </View>
      <Text style={ styles.title }>Presente aberto!</Text>
      <Text style={ styles.text }>
        Deseja curtir a mensagem?
        Salvar para visualizar depois?
        Crie uma conta iCods, é fácil e rápido
      </Text>
      <TouchableWithoutFeedback onPress={ () => { navigation.navigate( 'Register' ) } }>
        <View style={ styles.button }>
          <Text style={ { color: '#fff' } }>Criar conta iCods</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default GiftOpen;
