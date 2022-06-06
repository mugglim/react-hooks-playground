import { useState, useTransition } from 'react';
import ItemList from './ItemList';

export default function WithUseTranstion() {
    const [fastKeyword, setFastKeyword] = useState('');
    const [slowKeyword, setSlowKeyword] = useState('');
    const [isPending, startTransition] = useTransition();

    const Loading = () => <p>is loading..</p>;

    const handleInputKeyUp = (e) => {
        setFastKeyword(e.target.value);
        startTransition(() => {
            setSlowKeyword(e.target.value);
        });
    };

    return (
        <div>
            <h2>With transition</h2>
            <ul>
                <li>fastKeyword :{fastKeyword}</li>
                <li>slowKeyword :{slowKeyword}</li>
            </ul>

            <input onKeyUp={handleInputKeyUp} />
            <ul>
                {isPending ? <Loading /> : <ItemList keyword={slowKeyword} />}
            </ul>
        </div>
    );
}
