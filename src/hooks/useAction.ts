import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../redux/ducks';

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreator, dispatch);
}

