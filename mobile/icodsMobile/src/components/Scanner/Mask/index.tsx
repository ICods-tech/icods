import React from 'react';
import {Dimensions, View} from 'react-native';
import styles from './styles';

interface MaskProps {
  read?: boolean;
}

const Mask = ({read}: MaskProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      {read ?
        <View style={styles.squareRead}/>
        :
        <View style={styles.square}>
          <View style={styles.squareLeft} />
          <View style={styles.squareCenter}>
            <View style={styles.squareBordersTop}>
              <View style={styles.borderLeftTop} />
              <View style={styles.borderRightTop} />
            </View>
            <View style={styles.squareBordersBottom}>
              <View style={styles.borderLeftBottom} />
              <View style={styles.borderRightBottom} />
            </View>
          </View>
          <View style={styles.squareRight} />
        </View>
      }
      
      <View style={styles.footer} />
    </View>
  );
};

export default Mask;
