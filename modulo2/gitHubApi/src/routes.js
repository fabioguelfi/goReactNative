import { StackNavigator, TabNavigator } from 'react-navigation';

import Organization from './pages/organization';
import Repositories from './pages/repositories';
import Welcome from './pages/welcome';

const Routes = StackNavigator({
    Welcome: { screen: Welcome },
    User: {
        screen: TabNavigator({
            Repositories: { screen: Repositories },
            Organization: { screen: Organization},
        }),
     },
}, {
    initialRouteName: 'Welcome',
});

export default Routes;