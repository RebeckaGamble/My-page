import useArray from './useArray'
import '../../styles/numbers.css'

export default function ArrayComponent() {
    const { array, set, push, remove, filter, update, clear } = useArray([
       0, 1, 2, 3, 4, 5, 6, 8
    ])

    return (
        <div className='count'>
            <div className='num'>{array.join(", ")} </div>

            <div className='buttons'>
                <button className='btn' onClick={() => push(7)}>Lägg till 7</button>
                <button className='btn' onClick={() => update(1, 9)}>Ändra andra elementet till 9</button>
                <button className='btn' onClick={() => remove(1)}>Ta bort andra elementet</button>
                <button className='btn' onClick={() => filter(n => n < 3)}>Behåll nummer lägre än 3</button>
                <button className='btn' onClick={() => set([1, 3])}>Sätt till 1, 3</button>
                <button className='btn' onClick={clear}>Töm</button>
            </div>
        </div>
    )
}