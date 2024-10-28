import React, { useState } from 'react';
import { getColor } from '../../../common/colors';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { Typography } from '../../atoms/Typography/Typography';


import QRCode from 'react-native-qrcode-svg';
import { StyledContainer } from '../../atoms/Container/Container';
import { Button } from '@components/atoms/Button/Button';


export const PaymentMethodPix = () => {
  const pixCode = '000.000.000-00';

  const [visible, setVisible] = useState(true);

  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      backdropOpacity={0.3}
      style={style.modal}>
      <View
        style={{
          flex: 0.48,
          backgroundColor: getColor('white-default'),
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          padding: 24,
          gap: 10,
        }}>
        <Typography color="gray-800" variant="h3">
          QrCode
        </Typography>
        <StyledContainer justify="center" align="center">
          <QRCode
            value={pixCode}
            size={180}
            color="black"
            backgroundColor="white"
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={15}
            logoBackgroundColor="yellow"
          />
          <Typography color="gray-800" variant="body1">
            {pixCode}
          </Typography>
        </StyledContainer>
        <Button onPress={() => setVisible(false)}>Copiar chave</Button>
      </View>
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
