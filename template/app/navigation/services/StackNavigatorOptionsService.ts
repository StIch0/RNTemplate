import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { baseNavigationOptions } from '../constants';
import type {
  HeaderBackTitleOptions,
  HeaderLeft,
  HeaderRight,
  HeaderTitleOptions,
} from '../types';
class StackNavigatorOptionsService {
  private navigationOptions: NativeStackNavigationOptions;

  constructor(newOptions = baseNavigationOptions) {
    this.navigationOptions = newOptions as NativeStackNavigationOptions;
  }

  addDefaultOptions(options: NativeStackNavigationOptions) {
    return this.merge(options);
  }

  addTitle(
    title: string,
    titleOptions?: HeaderTitleOptions<NativeStackNavigationOptions>,
  ) {
    return this.merge({ headerTitle: title, ...titleOptions });
  }

  addBackTitle(
    title: string,
    backTitleOptions?: HeaderBackTitleOptions<NativeStackNavigationOptions>,
  ) {
    return this.merge({
      headerBackTitle: title,
      ...backTitleOptions,
    });
  }

  addLargeTitle(
    title: string,
    titleOptions?: HeaderTitleOptions<NativeStackNavigationOptions>,
  ) {
    return this.merge({ headerTitle: title, ...titleOptions });
  }

  addHeaderColor(backgroundColor: string) {
    return this.merge({ headerStyle: { backgroundColor } });
  }

  addHeaderLeft(headerLeft: HeaderLeft<NativeStackNavigationOptions>) {
    return this.merge({ headerLeft });
  }

  addHeaderRight(headerRight: HeaderRight<NativeStackNavigationOptions>) {
    return this.merge({ headerRight });
  }

  addHeaderShow(headerShown = true) {
    return this.merge({ headerShown });
  }

  addHeaderCustom(header: NativeStackNavigationOptions) {
    return new StackNavigatorOptionsService(header);
  }

  hideBackParams() {
    return this.merge({
      headerBackTitleVisible: false,
      headerBackVisible: false,
    });
  }

  hideShadow() {
    return this.merge({
      headerShadowVisible: false,
      headerLargeTitleShadowVisible: false,
    });
  }

  showShadow() {
    return this.merge({
      headerShadowVisible: true,
    });
  }

  private merge(newOption: NativeStackNavigationOptions) {
    return new StackNavigatorOptionsService({
      ...this.navigationOptions,
      ...newOption,
    });
  }

  get options() {
    return this.navigationOptions;
  }
}

const stackNavigatorOptionsService = new StackNavigatorOptionsService();

export { stackNavigatorOptionsService };
