import MainStyle from '../../styles'
import StyleSheet from '../../styles/StyleSheet'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MainStyle.color.main,
    ios: {
      padding: 30,
    },
    android: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20,
      paddingLeft: 20,
    },
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  title: {
    justifyContent: 'flex-start',
    color: 'white',
    fontSize: MainStyle.font.large,
    ios: {
      marginTop: 8,
    },
    android: {
      marginTop: 3,
    },
    fontWeight: 'bold',
  },
  btn: {
    padding: 5,
    height: 42,
    alignSelf: 'stretch',
    borderRadius: 21,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  fbBtn: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  normalBtn: {
  },
  fbBtnInnerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    backgroundColor: 'transparent',
  },
  btnText: {
    flex: 1,
    fontSize: MainStyle.font.medium + 2,
    textAlign: 'center',
    justifyContent: 'center',
  },
  fbBtnText: {
    color: MainStyle.color.main,
  },
  normalBtnText: {
    color: 'white',
  },
  serviceText: {
    color: 'white',
    fontSize: MainStyle.font.medium - 2,
    lineHeight: 20,
    alignSelf: 'stretch',
  },
})
