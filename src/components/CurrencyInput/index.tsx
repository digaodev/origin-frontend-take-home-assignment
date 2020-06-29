import React from 'react';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

type InputProps = React.ComponentProps<'input'>;

const CurrencyInput: React.FC<MaskedInputProps> = props => {
  const currencyMask = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: 10,
    allowNegative: false,
    allowLeadingZeroes: false
  });

  return <MaskedInput mask={currencyMask} {...props} />;
};

export default CurrencyInput;
