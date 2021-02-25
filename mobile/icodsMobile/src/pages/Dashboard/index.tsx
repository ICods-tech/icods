import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import { View, Text, Image, StatusBar, Button, SafeAreaView, TouchableWithoutFeedback, ScrollView } from 'react-native';
import HeaderDashboard from '../../components/HeaderDashboard'
import BottomAuthentication from '../../components/BottomAuthentication'
import styles from './styles';
import { useAuth } from '../../hooks/auth'
import extracNameAndSurname from '../../utils/extractNameAndSurname'
import CloudRightSmall from '../../assets/images/cloud-right-stripe-sm.svg'
import CloudLeftLarge from '../../assets/images/cloud-left-stripe-lg.svg'
import DashboardBlock from '../../components/DashboardBlock'

const Dashboard = () => {
  const [choosenActivityScope, setChoosenActivityScope] = useState<'all'|'mine'>('all')
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
        <ScrollView style={styles.blockScrolling} horizontal>
          <DashboardBlock text={'Escanear'} image={'scan'} />
          <DashboardBlock text={'Histórico'} image={'history'} />
          <DashboardBlock text={'Social'} image={'social'} />
        </ScrollView>
        <View style={styles.activitiesContainer}>
          <View style={styles.activitiesHeader}>
            <Text style={styles.activitiesText}>Atividades</Text>
            <View style={styles.specificActivitiesContainer}>
              <TouchableWithoutFeedback onPress={() => setChoosenActivityScope('all')}>
                <View style={choosenActivityScope === 'all' && styles.allActivitiesTextWrapper}>
                  <Text
                    style={choosenActivityScope === 'all' 
                          ? styles.allActivitiesTextSelection 
                      : styles.allActivitiesText}>Todas</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setChoosenActivityScope('mine')}>
                <View style={choosenActivityScope === 'mine'
                            ? styles.myActivitiesTextWrapperSelected
                            : styles.myActivitiesTextWrapper}>
                <Text
                  style={choosenActivityScope === 'mine'
                        ? styles.myActivitiesTextSelection 
                        : styles.myActivitiesText}>Minhas</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Dashboard;