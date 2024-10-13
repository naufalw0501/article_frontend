import React from 'react';
import { ConfirmationAlertEntity, MiniAlertConfirmationEntity, MiniAlertEntity } from './views/layout/alert/AlertEntity';
import { UserEntity } from './data/entity/userEntity';
const AppContext = React.createContext<{
    contextAccessToken: string,
    contextUserEntity: UserEntity | null,
    setContextUserEntity: (val: UserEntity | null) => void,
    setContextLoading: (val: boolean) => void,
    contextShowMiniAlertFunc: (val: MiniAlertEntity) => void,
    contextShowMiniAlertConfirmationFunc: (val: MiniAlertConfirmationEntity) => void,
    contextShowConfirmationAlertFunc: (val: ConfirmationAlertEntity) => void,
}>({
    contextAccessToken: '', 
    contextUserEntity: null,
    setContextUserEntity: (val: UserEntity | null) => void {},
    setContextLoading: (boolean) => void {},
    contextShowMiniAlertFunc: (val: MiniAlertEntity) => void {},
    contextShowMiniAlertConfirmationFunc: (val: MiniAlertConfirmationEntity) => void {},
    contextShowConfirmationAlertFunc: (val: ConfirmationAlertEntity) => void {},
});
export default AppContext;