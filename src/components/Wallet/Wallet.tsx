import { MutableRefObject, useCallback, useEffect } from 'react';
import { FormattedBalance } from '../Balance/FormattedBalance/FormattedBalance';
import { Account } from '../../generated/graphql';
import { UnitStyle } from '../Balance/metricUnit';
import { Icon, IconType } from '../Icon/Icon';
import Identicon from '@polkadot/react-identicon';
import './Wallet.scss';
import { useModalPortal } from '../Balance/AssetBalanceInput/hooks/useModalPortal';
import { useModalPortalElement } from './AccountSelector/hooks/useModalPortalElement';

const horizontalBar = '―';

export interface WalletProps {
  modalContainerRef: MutableRefObject<HTMLDivElement | null>;
  accounts?: Account[];
  account?: Account;
  onAccountSelected: (account: Account) => void;
  onAccountCleared: () => void;
  extensionLoading: boolean;
  isExtensionAvailable: boolean;
  setAccountSelectorOpen: (isModalOpen: boolean) => void;
}

export const Wallet = ({
  modalContainerRef,
  accounts,
  account,
  onAccountSelected,
  onAccountCleared,
  extensionLoading,
  isExtensionAvailable,
  setAccountSelectorOpen,
}: WalletProps) => {
  const modalPortalElement = useModalPortalElement({
    accounts,
    onAccountSelected,
    onAccountCleared,
    account,
    isExtensionAvailable,
  });
  const { isModalOpen, toggleModal, modalPortal, toggleId } = useModalPortal(
    modalPortalElement,
    modalContainerRef,
    false // don't auto close when clicking outside the modalPortalElement
  );
  const handleAccountSelectorClick = useCallback(
    () => toggleModal(),
    [toggleModal]
  );
  useEffect(() => {
    setAccountSelectorOpen(isModalOpen);
  }, [isModalOpen, setAccountSelectorOpen]);

  return (
    <div className="wallet d-flex justify-content-between">
      {/* This portal will be rendered at it's container ref as defined above */}
      {modalPortal}

      <div className="wallet__icons-wrapper">
        <span className="wallet__icon">
          <Icon type={IconType.HELP} />
        </span>
        <span className="wallet__icon">
          <Icon type={IconType.NOTIFICATION_INACTIVE} />
        </span>
      </div>
      <div
        className="d-flex wallet__info-wrapper"
        onClick={(_) => handleAccountSelectorClick()}
        data-modal-portal-toggle={toggleId}
      >
        {extensionLoading ? (
          <div className="wallet__info">Loading...</div>
        ) : isExtensionAvailable ? (
          <>
            {account ? (
              <>
                <div className="d-flex flex-column align-items-end">
                  {account?.balances ? (
                    account?.balances.map((balance, i) => (
                      <FormattedBalance
                        balance={balance}
                        unitStyle={UnitStyle.SHORT}
                        precision={1}
                      />
                    ))
                  ) : (
                    <div>{horizontalBar}</div>
                  )}
                  <div className="wallet__fiat-balance">~$ {horizontalBar}</div>
                </div>
                <Identicon value={account?.id} size={32} />
                <div className="wallet__account-name">{account?.name}</div>
              </>
            ) : (
              <>
                <div className="wallet__select-account-icon" />
                <div className="wallet__info">Connect account</div>
              </>
            )}
          </>
        ) : (
          <div className="wallet__info">Install extension</div>
        )}
        <div>
          <Icon type={IconType.DROPDOWN_ARROW} />
        </div>
      </div>
    </div>
  );
};