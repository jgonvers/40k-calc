import { configureStore } from '@reduxjs/toolkit';
import weaponDBReducer from '../features/weapondb/weapondbSlice';
import resultReducer from '../features/result/resultSlice';
import attacksReducer from '../features/attacks/attacksSlice';
import attackFormSlice from '../features/addAttackForm/AttackFormSlice';
import loaderSlice from '../features/loader/loaderSlice';
export const store = configureStore({
  reducer: {
    WeaponDataBase: weaponDBReducer,
    Result: resultReducer,
    Attacks: attacksReducer,
    AttackForm: attackFormSlice,
    Loader: loaderSlice
  },
});
