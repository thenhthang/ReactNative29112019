/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Position} from './components/PositionAbsolute';
import {UICoBan3} from './components/PositionAbsolute2';
import {Relative} from './components/PositionRelative'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Relative);