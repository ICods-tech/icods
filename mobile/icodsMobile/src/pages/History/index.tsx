import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import CloudRightSmall from '../../assets/images/cloud-right-stripe-sm.svg';
import CloudLeftLarge from '../../assets/images/cloud-left-stripe-lg.svg';
import DeleteButton from '../../assets/images/Icons/delete_button.svg';
import FavoriteButton from '../../assets/images/Icons/favorite_button.svg';
import HeaderHistory from '../../components/History/HeaderHistory';
import HistoryFooter from '../../components/History/HistoryFooter';
import HistoryCards from '../../components/History/HistoryCards';


const History = () => {
  const searchData = [
    {
      id: 1,
      code: "iCOD 12332442",
      content: "Público",
      createdAt: "Marcelo Alves",
      date: "02/12/2020",
      statusFlag: "green",
      favorite: true,
    },
    {
      id: 2,
      code: "iCOD 12332442",
      content: "Público",
      createdAt: "Julhêta",
      date: "09/04/2021",
      statusFlag: "red",
      favorite: false,
    },
    {
      id: 3,
      code: "iCOD 12332442",
      content: "Público",
      createdAt: "Lucacete",
      date: "09/04/2021",
      statusFlag: "green",
      favorite: true
    }
  ]

  return (
    <SafeAreaView style={styles.background}>
      <HeaderHistory />

      <View style={styles.dateContainer}>
        <CloudRightSmall style={styles.cloudRightSmallHistory} />

        <View style={styles.dateCloudContainer}>
          <Text style={styles.date}>2 de Dezembro</Text>
          <CloudLeftLarge style={styles.cloudLeftLargeHistory} />
        </View>
      </View>
      <ScrollView>

        {searchData.map(
          data => <HistoryCards key={data.id}
            code={data.code}
            content={data.content}
            createdAt={data.createdAt}
            date={data.date}
            statusFlag={data.statusFlag}
            favorite={data.favorite}
          />)
        }
      </ScrollView>
      <HistoryFooter />
    </SafeAreaView>
  )
}

export default History;