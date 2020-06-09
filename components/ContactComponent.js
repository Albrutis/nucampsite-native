import React, { Component } from "react";
import { CAMPSITES } from "../shared/campsites";
import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Text } from "react-native";
import * as Animatable from "react-native-animatable";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title="Contact Information" wrapperStyle={{ Margin: 20 }}>
            <Text style={{ marginBottom: 20 }}>
              1 Nucamp Way {"\n"}
              Seattle, WA 98001 {"\n"}
              U.S.A.{"\n"}
              {"\n"}
              Phone: 1-206-555-1234 {"\n"}
              Email: campsites@nucamp.co
            </Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
