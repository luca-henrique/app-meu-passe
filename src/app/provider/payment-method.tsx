import React, { createContext, useState } from 'react';

export type FieldNamePaymentMethodProps = keyof InitialStateProps;

export interface PaymentMethodContextProps {
  pix: boolean;
  invoice: boolean;
  credit_card: boolean;
  visible: string;
  handleVisiblePaymentMethod: (field: FieldNamePaymentMethodProps) => void;
  handleClosePaymentMethodModal: (field: FieldNamePaymentMethodProps) => void;
  handleChoosePaymentMethod: (field: FieldNamePaymentMethodProps) => void;
}

export const PaymentMethodContext = createContext<PaymentMethodContextProps>(
  {} as PaymentMethodContextProps,
);

interface PaymentMethodProviderProps {
  children: React.ReactNode;
}

type InitialStateProps = Omit<
  PaymentMethodContextProps,
  | 'handleVisiblePaymentMethod'
  | 'handleClosePaymentMethodModal'
  | 'handleChoosePaymentMethod'
>;

export function PaymentMethodProvider({ children }: PaymentMethodProviderProps) {
  const [initialState, setInitialState] = useState<InitialStateProps>({
    visible: '',
    pix: false,
    invoice: false,
    credit_card: false,
  });

  const handleVisiblePaymentMethod = (field: FieldNamePaymentMethodProps) => {
    const modalVisibleName = initialState.visible;
    if (modalVisibleName) {
      setInitialState({ ...initialState, [field]: true });
    }
  };

  const handleChoosePaymentMethod = (field: FieldNamePaymentMethodProps) => {
    if (field === 'credit_card') {
      setInitialState({ ...initialState, visible: field, [field]: true });
    } else {
      setInitialState({ ...initialState, visible: field, credit_card: false });
    }
  };

  const handleClosePaymentMethodModal = (
    field: FieldNamePaymentMethodProps,
  ) => {
    setInitialState({ ...initialState, visible: '', [field]: false });
  };

  return (
    <PaymentMethodContext.Provider
      value={{
        ...initialState,
        handleVisiblePaymentMethod,
        handleClosePaymentMethodModal,
        handleChoosePaymentMethod,
      }}>
      {children}
    </PaymentMethodContext.Provider>
  );
}
