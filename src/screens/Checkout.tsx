import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

const Checkout = () => {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Google Pay',
        value: 'option1',
        color: '#66ff66',
      },
      {
        id: '2',
        label: 'Phone Pay',
        value: 'option2',
        color: '#66ff66',
      },
    ],
    [],
  );
  const radioButtons2: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'SBI',
        value: 'option1',
        color: '#66ff66',
      },
      {
        id: '2',
        label: 'PNB',
        value: 'option2',
        color: '#66ff66',
      },
    ],
    [],
  );
  const radioButtons3: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'EMI',
        value: 'option1',
        color: '#66ff66',
      },
      {
        id: '2',
        label: 'Net Banking',
        value: 'option2',
        color: '#66ff66',
      },
      {
        id: '3',
        label: 'Cash on Delivery',
        value: 'option2',
        color: '#66ff66',
      },
    ],
    [],
  );
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selectedId2, setSelectedId2] = useState<string | undefined>();
  const [selectedId3, setSelectedId3] = useState<string | undefined>();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.tittle}>Payment Options</Text>
      </View>
      <View style={styles.containerUPI}>
        <Text style={styles.upi}>UPI</Text>
        <View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
        </View>
      </View>
      <View style={styles.containerUPI}>
        <Text style={styles.upi}>Cards</Text>
        <View>
          <RadioGroup
            radioButtons={radioButtons2}
            onPress={setSelectedId2}
            selectedId={selectedId2}
          />
        </View>
      </View>
      <View style={styles.containerUPI}>
        <Text style={styles.upi}>More Ways to Pay</Text>
        <View>
          <RadioGroup
            radioButtons={radioButtons3}
            onPress={setSelectedId3}
            selectedId={selectedId3}
          />
        </View>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {},
  tittle: {color: 'black', fontSize: 18},
  containerUPI: {
    marginTop: 10,
    backgroundColor: 'black',
    borderBlockColor: 'black',
    borderRadius: 9,
    height: 125,
  },
  upi: {
    color: 'white',
    marginTop: 5,
    marginLeft: 9,
  },
  btn: {
    backgroundColor: '#008c00',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 16,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
