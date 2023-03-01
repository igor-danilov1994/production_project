import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from '../getCounter/getCounter';

// use reSelect
export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value,
);
