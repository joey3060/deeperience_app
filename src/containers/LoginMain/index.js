/**
 * # LoginMain.js
 *
 *  The container to display every Login option
 *
 */
'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../reducers/auth/authActions'
import { Map } from 'immutable'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Actions } from 'react-native-router-flux'
import I18n from '../../lib/i18n'
import { FBLogin, FBLoginManager } from '../../components/FBLogin'
import Header from '../../components/Header'
import Loading from '../../components/Loading'

const {
  LOGIN,
  REGISTER,
} = require('../../constants/actions').default

const actions = [
  authActions,
]

function mapStateToProps(state) {
  return {
    device: state.device,
    global: state.global,
    main: state.main,
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject()

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  }
}

class LoginMain extends React.Component {
  constructor(props) {
    super(props)
    this.PERMISSIONS = ['public_profile',
      'email', 'user_friends', 'user_birthday', 'user_likes']
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText={I18n.t('LoginMain.loginMain')}
          back={this.props.back}
          onReturn={() => Actions.pop()}
        />
        <View style={styles.innerContainer}>
          <Loading
            visible={this.props.auth.form.isFetching}
            text={I18n.t('LoginMain.loginRightNow')}
          />
          <View style={{ flex: 2 }}>
            <Image source={require('../../images/dpLogoWhiteTransparent.png')}
                   style={styles.logo}
            />
            <Text style={styles.title}>{I18n.t('LoginMain.notLoginYet')}</Text>
            <Text style={styles.title}>{I18n.t('LoginMain.deeperience')}</Text>
          </View>
          <View style={{ flex: 3,
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        paddingTop: 10 }}
          >
            {
              this.props.device.platform === 'ios' ? (
                <FBLogin
                  ref={(fbLogin) => { this.fbLogin = fbLogin }}
                  permissions={this.PERMISSIONS}
                  onLogin={result => this.props.actions.facebookLogin(result.credentials.token)}
                  onLogout={e => console.log(e)}
                  loginOrNot={this.props.global.currentUser !== null}
                  isDisabled={this.props.auth.form.isFetching}
                />
              ) : (
                <FBLogin
                  ref={(fbLogin) => { this.fbLogin = fbLogin }}
                  loginBehavior={FBLoginManager.LoginBehaviors.Native}
                  permissions={this.PERMISSIONS}
                  onLogin={result => this.props.actions.facebookLogin(result.credentials.token)}
                  onLoginFound={e => console.log(e)}
                  onLoginNotFound={e => console.log(e)}
                  onLogout={e => console.log(e)}
                  onCancel={e => console.log(e)}
                  onPermissionsMissing={e => console.log(e)}
                  isDisabled={this.props.auth.form.isFetching}
                />
              )
            }
            <TouchableOpacity
              onPress={() => {
                this.props.actions.resetForm()
                Actions.LoginRegister({ formType: REGISTER })
              }}
              style={[styles.btn, styles.normalBtn]}
              underlayColor="transparent"
              activeOpacity={0.7}
            >
              <Text style={[styles.btnText, styles.normalBtnText]}>
                {I18n.t('LoginMain.register')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.actions.resetForm()
                Actions.LoginRegister({ formType: LOGIN })
              }}
              style={[styles.btn, styles.normalBtn]}
              underlayColor="transparent"
              activeOpacity={0.7}
            >
              <Text style={[styles.btnText, styles.normalBtnText]}>
                {I18n.t('LoginMain.login')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignSelf: 'stretch' }}>
            <Text style={styles.serviceText}>{I18n.t('LoginMain.serviceText')}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginMain)
