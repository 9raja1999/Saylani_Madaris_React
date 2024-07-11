
import { useState, useCallback } from 'react'
import Button from './components/Button/Button'
import AnchorLink from './components/AnchorLink/AnchorLink';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// Component
function Home() {
    // [variable name , function to update a variable] = useState(initial value)
    const [number, setNumber] = useState(1)
    // jab bhi state update hogi apka component dobara re render hoga
    // any function imported from react if starting with use is called a hook


    const handleIncrement = useCallback(() => {
        setNumber(number + 1) // 2
    }, [number])
    const handleDecrement = useCallback(() => {
        setNumber(number - 1)
    }, [number])


    console.log("Render")


    return (
        // fragments
        // Props Handling
        // Memory?
        <>
            <section>
                <h1>{number}</h1>
                <Button
                    text="Increment(+)" // Barhana
                    color="white"
                    bgColor="#646cff"
                    icon={'🎉'}
                    action={handleIncrement}
                />
                <Button
                    text="Decrement(-)" // Ghatana
                    color="white"
                    bgColor="#646cff"
                    icon={'🎉'}
                    action={handleDecrement}
                />
            </section>
        </>
    )
}

export default Home;