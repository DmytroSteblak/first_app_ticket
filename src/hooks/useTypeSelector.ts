import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppStateType } from '../redux/store';

export const useTypeSelector: TypedUseSelectorHook<AppStateType> = useSelector;
