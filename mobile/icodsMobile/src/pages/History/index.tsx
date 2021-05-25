import React, { useCallback, useEffect, useState } from 'react';
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
import { Colors } from '../../interfaces/colors';
import api from '../../services/api';
import { filteredQRCodesByDatePlaceholder } from '../../utils/filteredQRCodesByDatePlaceholder';

export interface FilteredQRCodes {
  id: string,
  enabled: boolean,
  link: string,
  content: string,
  favorited: boolean,
  postId: string | null,
  comparisonDate: string,
  qrCodeCreatorName: string,
  color: Colors
}

interface FilteredQRCodesByDate {
  [date: string]: FilteredQRCodes[]
}


const History = () => {
  // Placeholder, afterwards favorites will be a part of a qr code
  const [favoriteCard, setFavoriteCard] = useState<boolean>(false)
  const [qrCodes, setQRCodes] = useState<FilteredQRCodesByDate[]>(filteredQRCodesByDatePlaceholder)
  const [color, setColor] = useState<string>('noFilter')

  const loadQRCodes = useCallback(async () => {
    const response = await api.get('filtered_qrcodes/data', {
      params: {
        color
      }
    })
    console.log(response.data)
    setQRCodes(response.data.data)
  }, [qrCodes])

  useEffect(() => {
    loadQRCodes()
  }, [loadQRCodes])

  const RightActions = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [-120, 0],
      outputRange: [0.75, 0]
    })
    return (
      <View style={styles.iconsCardContainer}>
        <View>
          <Animated.Text
            style={{
              transform: [{ scale }],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
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
        <View>
          <TouchableOpacity>
            <Animated.Text
              style={{
                transform: [{ scale }]
              }}>
              <TrashQRCodeIcon style={{
                shadowOffset: { width: 1, height: 2, },
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOpacity: 1.0,
              }} />
            </Animated.Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.background}>
      <HeaderHistory
        setColorAndDate={({ date, color: filteredColor }) => {
          setColor(filteredColor)
        }}
      />
      <View style={styles.dateContainer}>
        <CloudRightSmall style={styles.cloudRightSmallHistory} />
        <CloudLeftLarge style={styles.cloudLeftLargeHistory} />
        <ScrollView>
          {qrCodes?.map((qrcode: FilteredQRCodesByDate) => {
            const [date] = Object.keys(qrcode)
            if (date !== '0')
              return (<>
                <View style={styles.dateCloudContainer}>
                  <Text style={styles.date}>{date}</Text>
                </View>
                <ScrollView style={{ height: 286, marginBottom: 12 }}>
                  {qrcode[date].map(
                    ({ id, color, comparisonDate, favorited, qrCodeCreatorName, content }) => (
                      <>
                        <Swipeable
                          key={id}
                          renderRightActions={RightActions}
                        >
                          <HistoryCards
                            key={id}
                            code={id.substr(id.length - 8)}
                            content={content}
                            creator={qrCodeCreatorName}
                            date={new Date(comparisonDate).toLocaleDateString("pt-BR")}
                            color={color}
                            favorite={favorited}
                          />
                        </Swipeable>
                      </>
                    ))
                  }
                </ScrollView>
              </>)
          })}
        </ScrollView>
      </View>
      <HistoryFooter />
    </SafeAreaView >
  )
}

export default History;