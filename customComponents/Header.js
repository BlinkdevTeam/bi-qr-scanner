import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import logo from '../assets/bi_logo.png';
import eventLogo from '../assets/event_logo.png';


export default function Header({screen}) {
  const deviceWidth = Dimensions.get("window").width

  console.log("screen", screen)
  return deviceWidth < 400 ? (
    <View style={styles.mobile.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Image source={logo} style={styles.mobile.imageStyle} />
        <Image source={eventLogo} style={styles.mobile.imageStyle} />
      </View>
    </View>
  ) : 
  screen !== "home" ?
  (
    <View style={styles.tablet.container}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image source={logo} style={styles.tablet.imageStyle1} />
        <Image source={eventLogo} style={styles.tablet.imageStyle2} />
      </View>
    </View>
  ) :
  (
    <View style={styles.tabletHome.container}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image source={logo} style={styles.tabletHome.imageStyle1} />
        <Image source={eventLogo} style={styles.tabletHome.imageStyle2} />
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  mobile: {
    container: {
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#08312A',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    imageStyle: {
      width: 100, 
      height: 20, 
      resizeMode: 'contain'
    }
  },
  tabletHome: {
    container: {
      paddingTop: "40%",
      paddingBottom: 50,
      backgroundColor: '#08312A',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      margin: "auto"
    },
    imageStyle1: {
      height: 30, 
      resizeMode: 'contain'
    },
    imageStyle2: {
      height: 250, 
      resizeMode: 'contain'
    }
  },
  tablet: {
    container: {
      paddingTop: 50,
      paddingBottom: 50,
      backgroundColor: '#08312A',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      margin: "auto"
    },
    imageStyle1: {
      height: 30, 
      resizeMode: 'contain'
    },
    imageStyle2: {
      height: 100, 
      resizeMode: 'contain'
    }
  },
});
