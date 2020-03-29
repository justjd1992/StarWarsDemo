import { Body, Container, Content, Header, Title, Toast } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { renderPersonDetails } from '../../components/PersonDetails';
import Strings from '../../constants/Strings';
import { getPeople } from '../../redux/actions/People';
import styles from './styles/HomeScreenStyles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    const { people, getPeople } = this.props;
    if (!people || people.length === 0) {
      getPeople();
    }
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (this.haveAPIResponded(prevProps)) {
      this.setState({ isLoading: false });
      if (error) {
        Toast.show({
          text: error
        });
      }
    }
  }

  haveAPIResponded = (prevProps) => {
    const { fetching } = this.props;
    const { isLoading } = this.state;

    return prevProps.fetching && !fetching && isLoading;
  };
  
  renderHeaderView() {
    return (
      <Header style={styles.headerView}>
        <Body style={styles.headerBody}>
          <Title style={styles.headerTitle}>{Strings.people}</Title>
        </Body>
      </Header>
    );
  }

  renderMainView() {
    const { people } = this.props.people;
    return (
      <Content padder showsVerticalScrollIndicator={false}>
        <FlatList
          data={people}
          renderItem={({ item }) => renderPersonDetails(item)}
        />
      </Content>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.renderHeaderView()}
        {this.renderMainView()}
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  people: PropTypes.object,
  getPeople: PropTypes.func,
  fetching: PropTypes.bool,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  people: state.people,
  fetching: state.people.fetching,
  error: state.people.error
});

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(getPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
