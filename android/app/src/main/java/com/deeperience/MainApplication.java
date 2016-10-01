package com.deeperience;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.burnweb.rnsimplealertdialog.RNSimpleAlertDialogPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.horcrux.svg.RNSvgPackage;
import com.futurice.rctaudiotoolkit.AudioPackage;

import java.util.Arrays;
import java.util.List;

import com.oblador.vectoricons.VectorIconsPackage;
import com.burnweb.rnsimplealertdialog.RNSimpleAlertDialogPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
                                         new MainReactPackage(),
                                         new RNSimpleAlertDialogPackage(),
                                         new MapsPackage(),
                                         new VectorIconsPackage(),
                                         new ReactNativeI18n(),
                                         new FacebookLoginPackage(),
                                         new RNSvgPackage(),
                                         new AudioPackage()
                                         );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
