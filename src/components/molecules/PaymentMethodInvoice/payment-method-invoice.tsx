import React, { useState } from 'react';
import Modal from 'react-native-modal';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import { Dimensions, StyleSheet } from 'react-native';
import { Typography } from '@components/atoms';
import { getColor } from '../../../common/colors';
import { Button } from '@components/atoms/Button/Button';
import { Container } from './style';


export const PaymentMethodInvoice = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      backdropOpacity={0.4}
      style={style.modal}>
      <Container>
        <Typography color="gray-800" variant="body4">
          Codigo de Barras
        </Typography>
        <Barcode
          format="codabar"
          value="0123456789012"
          text="0123456789012"
          style={{ backgroundColor: getColor('white-default') }}
          maxWidth={Dimensions.get('window').width}
        />
        <Button onPress={() => setVisible(false)}>
          Copia código
        </Button>
      </Container>
    </Modal>
  );
};


const style = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    position: 'absolute',
    bottom: -90,
    width: '100%',
  },
});
