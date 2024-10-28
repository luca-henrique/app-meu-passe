import React from 'react';
import { StyledContainer, Typography } from '@components/atoms';
import Modal from 'react-native-modal';

import { getColor } from '../../common/colors';
import { View } from 'react-native';
import { Button } from '@components/atoms/Button/Button';

export function SignOut() {

  return (
    <Modal
      isVisible={true}
      swipeDirection="down"
      style={{
        justifyContent: 'flex-end',
        margin: 0,
        flex: 1,
      }}>
      <View
        style={{
          flex: 0.15,
          backgroundColor: getColor('white-default'),
          justifyContent: 'center',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          padding: 30,
        }}>
        <Typography color="gray-800" variant="h3">
          Deseja realmente sair?
        </Typography>

        <View style={{ padding: 10 }} />
        <StyledContainer direction justify="space-between">
          <StyledContainer width={45}>
            <Button >Não</Button>
          </StyledContainer>
          <StyledContainer width={45}>
            <Button >Sim</Button>
          </StyledContainer>
        </StyledContainer>
      </View>
    </Modal>
  );
}
