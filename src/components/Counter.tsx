import { FC, useState } from 'react';
import classes from './Counter.module.scss';

export const Counter: FC = () => {
    const [count, setCount] = useState(0)


    return (
        <div className={classes.btn}>
            <button onClick={() =>setCount(count + 1 )}>increment</button>
            {count}
            <button onClick={() =>setCount(count - 1 )}>decrement</button>
        </div>
    );
};
