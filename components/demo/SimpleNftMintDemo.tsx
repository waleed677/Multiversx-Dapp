import { HStack, Input, Text } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { NumberInput, NumberInputField } from '@chakra-ui/react';
import {
  U32Value,
  ContractFunction,
  ContractCallPayloadBuilder,
  TokenTransfer,
} from '@multiversx/sdk-core';
import {
  useTransaction,
  TransactionCallbackParams,
  SCQueryType,
} from '@useelven/core';
import { useElvenScQuery } from './useElevenScQuery';
import { useCallback, useState } from 'react';
import { ActionButton } from '../tools/ActionButton';
import { FlexCardWrapper } from '../ui/CardWrapper';

// Interface
const SmartContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '';

export const SimpleNftMintDemo = ({
  cb,
}: {
  cb: (params: TransactionCallbackParams) => void;
}) => {
  const { triggerTx } = useTransaction({ cb });
  const [tokens, setTokensAmount] = useState<string>('');
  const [tokensToSend, setTokensToSend] = useState<number>();
  const [elgdPrice, setelgdPrice] = useState<string>('');
  const [tokenSellingPrice, setTokenSellingPrice] = useState<number>();

  const tokensInputRef = useRef<HTMLInputElement | null>(null);
  const tokensValue = parseInt(tokensInputRef.current?.value || '0');
  // Token Price
  const { data: tokenPrice } = useElvenScQuery<number>({
    funcName: 'get_token_price',
    type: SCQueryType.NUMBER,
  });

  const { data: price } = useElvenScQuery<number>({
    funcName: 'get_usdc_to_egld',
    type: SCQueryType.NUMBER,
    args: [tokens],
    autoInit: tokens !== '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) !== 0 && event.target.value !== '') {
      let amount = parseInt(event.target.value);

      amount = amount < 1000 ? 1000 : amount;
      amount = amount > 10000 ? 10000 : amount;
      setTokensToSend(amount);
      const totalTokenToBuy =
        tokenSellingPrice !== undefined ? amount * tokenSellingPrice : 0;
      let hexValue = totalTokenToBuy.toString(16);
      if (hexValue.length % 2 !== 0) {
        hexValue = '0' + hexValue;
      }

      setTokensAmount(hexValue);
    }
  };

  const handleSendTx = useCallback(() => {
    const tkn = tokensToSend !== undefined ? tokensToSend : 0;
    const u32Value = new U32Value(tkn.toString());
    const data = new ContractCallPayloadBuilder()
      .setFunction(new ContractFunction('buy_token'))
      .setArgs([u32Value])
      .build();

    triggerTx({
      address: SmartContractAddress,
      gasLimit: 14000000,
      value: TokenTransfer.egldFromAmount(elgdPrice),
      data,
    });
  }, [triggerTx, tokens, elgdPrice]);

  useEffect(() => {
    if (tokenPrice !== null || tokenPrice !== undefined) {
      setTokenSellingPrice(tokenPrice);
    }
  }, [tokenPrice]);

  useEffect(() => {
    if (price !== null && price !== undefined) {
      const egldPrice = price / 1e18;
      setelgdPrice(egldPrice.toString());
    }
  }, [price]);

  return (
    <FlexCardWrapper>
      <HStack spacing={10} mb={10} direction={['column', 'row']} width="80%">
        <NumberInput size={'lg'} width="100%" min={1000} max={10000}>
          <NumberInputField
            ref={tokensInputRef}
            value={tokens?.toString()}
            placeholder="Token Range 1000 - 10000"
            onChange={handleInputChange}
          />
        </NumberInput>

        <Input
          size={'lg'}
          width="100%"
          readOnly
          placeholder="egld price"
          value={!tokensValue ? '' : elgdPrice.toString()}
        />
      </HStack>

      <ActionButton onClick={handleSendTx}>
        <Text>Buy Now</Text>
      </ActionButton>
    </FlexCardWrapper>
  );
};
