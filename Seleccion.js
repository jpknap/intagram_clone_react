import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Seleccion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Seleccion </Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  dispatchOne: () => {
    //
  },
});

export default connect (mapStateToProps, mapDispatch) (Seleccion);
