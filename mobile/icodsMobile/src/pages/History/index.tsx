import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Animated, TouchableOpacity } from 'react-native';
import styles from './styles';
import CloudRightSmall from '../../assets/images/cloud-right-stripe-sm.svg';
import CloudLeftLarge from '../../assets/images/cloud-left-stripe-lg.svg';
import DeleteButton from '../../assets/images/Icons/delete_button.svg';
import FavoriteCardButton from '../../assets/images/Icons/favorite_qrcode_card.svg'
import NotFavoritedCardButton from '../../assets/images/Icons/notFavorited_qrcode_card.svg'
import TrashQRCodeIcon from '../../assets/images/Icons/trash_qrcode_card.svg'
import HeaderHistory from '../../components/History/HeaderHistory';
import HistoryFooter from '../../components/History/HistoryFooter';
import HistoryCards from '../../components/History/HistoryCards';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const History = () => {
  // Placeholder, afterwards favorites will be a part of a qr code
  const [favoriteCard, setFavoriteCard] = useState<boolean>(false)
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

  const RightActions = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [-120, 0],
      outputRange: [0.75, 0]
    })
    return (
      <View style={styles.iconsCardContainer}>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity>
            <Animated.Text
              style={{
                transform: [{ scale }]
              }}>
              <TrashQRCodeIcon />
            </Animated.Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Animated.Text
            style={{
              transform: [{ scale }]
            }}>
            <TouchableOpacity onPress={() => setFavoriteCard(!favoriteCard)}>
              {
                favoriteCard
                  ? (<FavoriteCardButton style={{
                    shadowOffset: { width: 1, height: 2, },
                    shadowColor: 'rgba(0, 0, 0, 0.25)',
                    shadowOpacity: 1.0,
                  }} />)
                  : (<NotFavoritedCardButton style={{
                    shadowOffset: { width: 1, height: 2, },
                    shadowColor: 'rgba(0, 0, 0, 0.25)',
                    shadowOpacity: 1.0,
                  }} />)
              }

            </TouchableOpacity>
          </Animated.Text>
        </View>
      </View>
    )
  }

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
          data => (
            <>
              <Swipeable
                key={data.id}
                renderRightActions={RightActions}
              >
                <HistoryCards
                  key={data.id}
                  code={data.code}
                  content={data.content}
                  createdAt={data.createdAt}
                  date={data.date}
                  statusFlag={data.statusFlag}
                  favorite={data.favorite}
                />
              </Swipeable>
            </>
          ))
        }
      </ScrollView>
      <HistoryFooter />
    </SafeAreaView>
  )
}

export default History;