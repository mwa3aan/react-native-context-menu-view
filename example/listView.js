import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StatusBar,
  StyleSheet,
  AppRegistry,
} from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import previewView from './previewView';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

AppRegistry.registerComponent('previewView', () => previewView);

const Item = ({title}) => (
  <ContextMenu
    title={'Set Color for ' + title}
    previewController={'previewView'}
    actions={[
      {
        title: 'blue',
        systemIcon: 'paintbrush',
      },
      {
        title: 'red',
        systemIcon: 'paintbrush',
      },
      {
        title: 'transparent',
        systemIcon: 'trash',
        destructive: true,
      },
      {
        title: 'disabled item',
        disabled: true,
      },
    ]}
    onPress={(event) => {
      console.warn(event.nativeEvent.name);
    }}
    onCancel={(event) => {
      console.warn('warning:' + event.nativeEvent.obj);
    }}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </ContextMenu>
);

const listView = (props) => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        {'Adriaan is ' + props.age + ' years old. ' + props.otherParam}
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default listView;
