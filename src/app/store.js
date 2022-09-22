import { configureStore } from '@reduxjs/toolkit';
import weaponDBReducer from '../features/weapondb/weapondbSlice';
import resultReducer from '../features/result/resultSlice';
import attacksReducer from '../features/attacks/attacksSlice';

export const store = configureStore({
  reducer: {
    WeaponDataBase: weaponDBReducer,
    Result: resultReducer,
    Attacks: attacksReducer,
  },
});
