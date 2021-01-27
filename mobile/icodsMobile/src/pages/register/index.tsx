import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import Asteroid from '../../assets/images/asteroid_image.svg';
import IcodsIcon from '../../assets/images/icods_icon.svg';
import Back from '../../assets/images/back.svg';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconPanel}>
        <Asteroid/>
        <IcodsIcon style={styles.icodsIcon} />
        <Back style={styles.backMenu}/>
      </View>

      
    </View>
  )
}

export default Register;


{/* <View style={styles.iconPanel}>
        <Image
          source={require('../../assets/images/asteroid_image.png')}
          style={styles.asteroidImage1}
        />
        <Image
          source={require('../../assets/images/icods_icon.png')}
          style={styles.icodsIcon}
        /> 
      </View> 
      <View style={styles.backMenu}>
        <Image
          source={require('../../assets/images/left_arrow.png')}
        />
      </View>
      
      <Image
        source={require('../../assets/images/fundo_inferior.png')}
        style={styles.fundoInferior}
      /> */}