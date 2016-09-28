import MainStyle from '../../styles'
import StyleSheet from '../../styles/StyleSheet'

export default StyleSheet.create({
  tripView: {
    height: 200,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tripOverView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    ios: {
      paddingTop: 15,
      paddingBottom: 15,
    },
    android: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 10,
    left: 10,
    paddingLeft: 5,
    ios: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      paddingRight: 6,
      width: 188,
    },
    android: {
      width: 190,
    },
  },
  title: {
    color: 'white',
    ios: {
      fontSize: MainStyle.font.big - 1,
    },
    android: {
      fontSize: MainStyle.font.big,
    },
  },
  dayInfo: {
    color: 'white',
    backgroundColor: '#00A2FF',
    textAlign: 'center',
    fontSize: MainStyle.font.medium,
    position: 'absolute',
    top: 75,
    left: 10,
    paddingLeft: 5,
    paddingRight: 5,
    ios: {
      paddingTop: 5,
      paddingBottom: 5,
    },
  },
  tagView: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 10,
    flexDirection: 'row',
  },
  tags: {
    color: 'white',
    backgroundColor: '#01C33B',
    textAlign: 'center',
    fontSize: MainStyle.font.medium,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10,
    alignItems: 'center',
    ios: {
      paddingTop: 5,
      paddingBottom: 5,
    },
  },
  statView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statIcon: {
    color: 'black',
    marginRight: 5,
  },
  statText: {
    color: 'black',
    fontSize: MainStyle.font.medium,
    marginRight: 10,
  },
  guideName: {
    fontSize: MainStyle.font.big,
    color: 'black',
  },
  price: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: MainStyle.font.big + 2,
    color: '#FF8000',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 20,
    right: 0,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    ios: {
      paddingTop: 5,
      paddingBottom: 5,
      fontWeight: '600',
    },
  },
  avatar: {
    borderRadius: 35,
    borderColor: 'white',
    borderWidth: 2,
    height: 70,
    width: 70,
    position: 'absolute',
    top: 5,
    right: 5,
  },
})
