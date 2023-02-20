import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string
}

export const BugButton: FC<BugButtonProps> = ({ className }) => {
    const [error, setError] = useState(false);

    const onToggleError = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button onClick={onToggleError}>
            throw Error
        </Button>
    );
};
