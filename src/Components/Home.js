import React,{useState} from 'react'

// const changeHandler = (e) => {
//     inputValue = e.target.value
//     console.log(inputValue)
// }

export const Home = () => {
    const [inputValue,setInputValue] = useState(0)

    // const btnStyle = {
    //     padding: 20,
    //     border: 'none',
    //     backgroundColor: '#f1f1f1',
    //     margin: 10,
    // }

    // useEffect(() => {
    //     console.log('useEffect')
    // }, [])

    // const increment = () => {
    //     setInputValue(inputValue + 1)
    // }

    // const decrement = () => {
    //     setInputValue(inputValue - 1)
    // }

    return (
        <div>
            <input style={{
                padding: 20,
                border: '1px solid rgba(0,0,0,0.4)'
            }}
                type="number"
                placeholder='Enter Something'
                onChange={(e) => {
                    setInputValue(e.target.value)
                    console.log(inputValue)
                }}
            />
            {/* <button style={btnStyle} onClick={decrement}>-</button>
            <button style={btnStyle} onClick={increment}>+</button> */}
        </div>
    )
}

export default Home
