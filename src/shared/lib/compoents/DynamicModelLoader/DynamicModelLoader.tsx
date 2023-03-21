import { FC, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModelLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean
}

type ReducersListEntries = [StateSchemaKey, Reducer]

export const DynamicModelLoader: FC<DynamicModelLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
