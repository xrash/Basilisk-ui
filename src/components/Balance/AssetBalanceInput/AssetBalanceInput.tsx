import classNames from 'classnames';
import { MutableRefObject, useCallback } from 'react';
import { Asset } from '../../../generated/graphql';
import { BalanceInput, BalanceInputProps } from '../BalanceInput/BalanceInput';
import { useModalPortal } from './hooks/useModalPortal';
import { useModalPortalElement } from './hooks/useModalPortalElement';

import './AssetBalanceInput.scss';
import { MetricUnit } from '../metricUnit';
import { MetricUnitSelector } from '../BalanceInput/MetricUnitSelector/MetricUnitSelector';
import { useDefaultUnit } from '../BalanceInput/hooks/useDefaultUnit';
import { useFormContext } from 'react-hook-form';
import Icon from '../../Icon/Icon';

export interface AssetBalanceInputProps {
  modalContainerRef: MutableRefObject<HTMLDivElement | null>;
  balanceInputName: BalanceInputProps['name'];
  assetInputName: string;
  defaultUnit?: BalanceInputProps['defaultUnit'];
  assets?: Asset[];
  defaultAsset?: Asset;
  isAssetSelectable?: boolean;
  // onAssetSelected: (asset: Asset) => void,
  balanceInputRef?: MutableRefObject<HTMLInputElement | null>;
}

export const AssetBalanceInput = ({
  modalContainerRef,
  balanceInputName,
  assetInputName,
  defaultUnit = MetricUnit.NONE,
  assets,
  defaultAsset,
  isAssetSelectable = true,
  // onAssetSelected,
  balanceInputRef,
}: AssetBalanceInputProps) => {
  const modalPortalElement = useModalPortalElement({
    assets,
    defaultAsset,
    assetInputName,
  });
  const { toggleModal, modalPortal, toggleId } = useModalPortal(
    modalPortalElement,
    modalContainerRef,
    false // don't auto close when clicking outside the modalPortalElement
  );
  const { unit, setUnit } = useDefaultUnit(defaultUnit);
  const handleAssetSelectorClick = useCallback(
    () => isAssetSelectable && toggleModal(),
    [isAssetSelectable, toggleModal]
  );

  const methods = useFormContext();

  return (
    <div className="asset-balance-input">
      {/* This portal will be rendered at it's container ref as defined above */}
      {modalPortal}
      {/* TODO: icon */}
      <div
        className="asset-balance-input__asset-info"
        onClick={(_) => handleAssetSelectorClick()}
        data-modal-portal-toggle={toggleId}
      >
        <div>
          {methods.getValues(assetInputName)}
          <Icon name="DropdownArrow" />
        </div>
      </div>
      <div className="asset-balance-input__input-wrapper">
        <MetricUnitSelector unit={unit} onUnitSelected={setUnit} />
        <BalanceInput
          name={balanceInputName}
          defaultUnit={unit}
          showMetricUnitSelector={false}
          inputRef={balanceInputRef}
        />
      </div>
    </div>
  );
};
