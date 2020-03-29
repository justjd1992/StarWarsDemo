import { Body, Card, CardItem, Text } from 'native-base';
import React from 'react';
import Colors from '../theme/Colors';
import styles from './styles/PersonDetailsStyles';

export function renderPersonDetails(item) {
  return(
    <Card>
      <CardItem header style={styles.cardItemHF}>
        <Text style={styles.textColor}>{item.name}</Text>
      </CardItem>
      <CardItem style={styles.cardItemColor}>
        <Body>
          <Text style={styles.textColor}>
              Bith Year: {item.birth_year}
          </Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItemColor}>
        <Body>
          <Text style={styles.textColor}>
              Height: {item.height}
          </Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItemColor}>
        <Body>
          <Text style={styles.textColor}>
              Mass: {item.mass}
          </Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItemColor}>
        <Body>
          <Text style={styles.textColor}>
              Eye Color: {item.eye_color}
          </Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItemColor}>
        <Body>
          <Text style={styles.textColor}>
              Skin Color: {item.skin_color}
          </Text>
        </Body>
      </CardItem>
      <CardItem footer style={styles.cardItemHF}>
        <Text style={{ color: Colors.snow }}>Gender: {item.gender} </Text>
      </CardItem>
    </Card>       
  );
}

export default renderPersonDetails;
