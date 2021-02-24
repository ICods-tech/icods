import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import HeaderDashboard from '../../components/HeaderDashboard'
import BottomAuthentication from '../../components/BottomAuthentication'
import styles from './styles';
import { useAuth } from '../../hooks/auth'
import extracNameAndSurname from '../../utils/extractNameAndSurname'
import CloudRightSmall from '../../assets/images/cloud-right-stripe-sm.svg'
import CloudLeftLarge from '../../assets/images/cloud-left-stripe-lg.svg'
import DashboardBlock from '../../components/DashboardBlock'

const Dashboard = () => {
  const { user } = useAuth()
  const { name, surname } = extracNameAndSurname(user.name)

  return (
    <View style={styles.background}>
      <StatusBar
        backgroundColor="#2b90d9"
        barStyle="light-content"
      />
      <HeaderDashboard
        name={name}
        surname={surname}
      />
      <View style={styles.dashboardContainer}>
        <View style={styles.welcomeContainer}>
          <CloudRightSmall style={styles.cloudRightSmallWelcome}/>
          <View>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Bem-Vindo</Text>
              <CloudLeftLarge style={styles.cloudLeftLargeWelcome} />
            </View>
            <View style={styles.toICodsTextContainer}>
              <Text style={styles.welcomeText}>ao iCODS!</Text>
              <CloudRightSmall style={styles.cloudRightSmallWelcomeText}/>
            </View>
          </View>
        </View>
        <Text style={styles.selectOneOptionText}>Selecione uma das opções abaixo</Text>
        <DashboardBlock text={'Escanear'}/>
      </View>
    </View>
  )
}

export default Dashboard;