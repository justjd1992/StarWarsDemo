import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../theme/Colors';

export default EStyleSheet.create({
  container: { backgroundColor: 'rgb(20,35,61)' },
  headerView: {
    backgroundColor: Colors.darkCerulean,
    borderBottomWidth: '0rem'
  },
  headerBody: {
    flex:1
  },
  headerTitle: {
    color: 'snow',
    textAlign: 'center',
    alignSelf: 'center',
    letterSpacing: '0rem'
  }
});
