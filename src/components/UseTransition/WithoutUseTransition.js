import { useState } from 'react';
import ItemList from './ItemList';

export default function WithoutUseTranstion() {
    const [fastKeyword, setFastKeyword] = useState('');
    const [slowKeyword, setSlowKeyword] = useState('');

    const handleInputKeyUp = (e) => {
        setFastKeyword(e.target.value);
        setSlowKeyword(e.target.value);
    };

    return (
        <div>
            <h2>Without transition</h2>
            <ul>
                <li>fastKeyword :{fastKeyword}</li>
                <li>slowKeyword :{slowKeyword}</li>
            </ul>

            <input onKeyUp={handleInputKeyUp} />
            <ul>
                <ItemList keyword={slowKeyword} />
            </ul>
        </div>
    );
}
