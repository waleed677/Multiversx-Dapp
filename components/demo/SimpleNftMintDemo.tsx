import { HStack, Input, Link, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import {
  U32Value,
  ContractFunction,
  ContractCallPayloadBuilder,
  TokenTransfer,
} from '@multiversx/sdk-core';
import {
  useTransaction,
  TransactionCallbackParams,
  useConfig,
  useScQuery,
  SCQueryType,
} from '@useelven/core';
import BigNumber from 'bignumber.js';
import { useElvenScQuery } from './useElevenScQuery';
import { useCallback, useState } from 'react';
import { ActionButton } from '../tools/ActionButton';
import { shortenHash } from '../../utils/shortenHash';
import { FlexCardWrapper } from '../ui/CardWrapper';
import abi from '../../abi.json';

// Interface
type BigUint = string; // Use string to represent BigUint in your DApp
const SmartContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '';
const getTokenFunctionName = process.env.NEXT_PUBLIC_FUNCTION_NAME || '';

export const SimpleNftMintDemo = ({
  cb,
}: {
  cb: (params: TransactionCallbackParams) => void;
}) => {
  // const { pending, triggerTx } = useTransaction({ cb });

  const [tokens, setTokensAmount] = useState<string>('');
  const [elgdPrice, setelgdPrice] = useState<string>('');
  const [tokenSellingPrice, setTokenSellingPrice] = useState<number>();

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
    const amount = event.target.value;
    const totalTokenToBuy =
      tokenSellingPrice !== undefined
        ? parseInt(amount) * tokenSellingPrice
        : 0;
    let hexValue = totalTokenToBuy.toString(16);
    if (hexValue.length % 2 !== 0) {
      hexValue = '0' + hexValue;
    }

    setTokensAmount(hexValue);
  };

  useEffect(() => {
    if (tokenPrice !== null || tokenPrice !== undefined) {
      setTokenSellingPrice(tokenPrice);
    }
  }, [tokenPrice]);

  useEffect(() => {
    if (price !== null && price !== undefined) {
      let egldPrice = (price / 1e18).toFixed(5);
      setelgdPrice(egldPrice.toString());
      console.log({ egldPrice });
    }
  }, [price]);

  return (
    <FlexCardWrapper>
      <HStack spacing={10} mb={10} direction={['column', 'row']} width="80%">
        <NumberInput size={'lg'} width="100%">
          <NumberInputField
            value={tokens?.toString()}
            placeholder="Enter Tokens"
            onChange={handleInputChange}
          />
        </NumberInput>

        <Input
          size={'lg'}
          width="100%"
          readOnly
          placeholder="egld price"
          value={elgdPrice?.toString()}
        />
      </HStack>

      <ActionButton onClick={fetch}>
        <Text>Buy Now</Text>
      </ActionButton>
    </FlexCardWrapper>
  );
};
