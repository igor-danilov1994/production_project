import { FC, useState } from 'react';
import './Counter.scss';

export const Counter: FC = () => {
    const [count, setCount] = useState(0)


    return (
        <div>
            <button onClick={() =>setCount(count + 1 )}>increment</button>
            {count}
            <button onClick={() =>setCount(count - 1 )}>decrement</button>
        </div>
    );
};
