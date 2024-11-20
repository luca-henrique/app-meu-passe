import React from 'react';
import { getColor } from '../../../common/colors';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { Typography } from '../../atoms/Typography/Typography';


import QRCode from 'react-native-qrcode-svg';
import { StyledContainer } from '../../atoms/Container/Container';
import { Button } from '@components/atoms/Button/Button';
import { usePaymentMethod } from '../../../hooks/usePaymentMethod';


export const PaymentMethodPix = () => {
  const { pix, handleClosePaymentMethodModal } = usePaymentMethod();

  const pixCode = '000.000.000-00';


  return (
    <Modal
      isVisible={pix}
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
        <Button onPress={() => handleClosePaymentMethodModal('pix')}>Copiar chave</Button>
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
