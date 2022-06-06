import { dummyData } from './data';

const ItemList = ({ keyword }) => {
    if (!keyword) return '';

    const regex = new RegExp(keyword, 'g');
    return (
        <>
            {dummyData
                .filter((el) => regex.test(el))
                .map((el) => (
                    <li>{el}</li>
                ))}
        </>
    );
};

export default ItemList;
