import type { StackNavigationOptions } from '@react-navigation/stack';

import { baseNavigationOptions } from '../constants';
import type { HeaderLeft, HeaderRight, HeaderTitleOptions } from '../types';

class StackNavigatorOptionsService {
  private navigationOptions: StackNavigationOptions;

  constructor(newOptions = baseNavigationOptions) {
    this.navigationOptions = newOptions;
  }

  addTitle(title: string, titleOptions?: HeaderTitleOptions) {
    return this.merge({ headerTitle: title, ...titleOptions });
  }

  addHeaderColor(backgroundColor: string) {
    return this.merge({ headerStyle: { backgroundColor } });
  }

  addHeaderLeft(headerLeft: HeaderLeft) {
    return this.merge({ headerLeft });
  }

  addHeaderRight(headerRight: HeaderRight) {
    return this.merge({ headerRight });
  }

  addHeaderShow(headerShown = true) {
    return this.merge({ headerShown });
  }

  addHeaderCustom(header: StackNavigationOptions) {
    return new StackNavigatorOptionsService(header);
  }

  private merge(newOption: StackNavigationOptions) {
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
