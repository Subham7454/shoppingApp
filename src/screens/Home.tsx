import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//React navigatiom
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramsList} from '../App';
import ProductItem from '../components/ProductItem';
import Seperator from '../components/Seperator';
import {PRODUCTS_LIST} from '../data/constant';

type HomeProps = NativeStackScreenProps<RootStackPramsList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
