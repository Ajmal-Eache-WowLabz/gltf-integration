import {View, Text, TouchableOpacity, DeviceEventEmitter} from 'react-native';
import Constants from '../constants';

const colorsWithCost = [
  {color: '#36454F', cost: 0, label: 'blue'},
  {color: '#000', cost: 800, label: 'black'},
  {color: '#2d2d2d', cost: 1500, label: 'gray'},
  {color: '#2e1c00', cost: 1200, label: 'brown'},
];

export default function ConfiguratorView() {
  const Pallete = (props: {index: number; color: string}) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 8,
        }}
        onPress={() => {
          DeviceEventEmitter.emit(Constants.CHANGE_COLOR, props.color);
        }}>
        <View
          style={{
            borderRadius: 180,
            width: 80,
            height: 80,
            backgroundColor: props.color,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#E6E6E8',
        flex: 0.2,
        shadowColor: 'black',
        elevation: 5,
        borderRadius: 10,
        marginLeft: 8,
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 8,
          marginLeft: 8,
        }}>
        Colors
      </Text>
      <View style={{flexDirection: 'row'}}>
        {colorsWithCost.map((value, index) => {
          return <Pallete color={value.color} index={index} />;
        })}
      </View>
    </View>
  );
}
