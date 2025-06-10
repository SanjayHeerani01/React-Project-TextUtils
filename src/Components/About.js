import React, { useState } from 'react'

export default function About() {
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mood");

    const handleDarkMood = () => {
        console.log("App  nay button press kiya ");
        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mood");
        } else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mood");
        }
    }

    return (
        <div>
            <div className="container" style={myStyle}>
                <h1>📝 Short and Clean Version:</h1>
                <p>
                    TextUtils is a simple yet powerful tool for text manipulation.
                    Whether you want to convert cases, remove extra spaces, count characters,
                    or format your writing, TextUtils helps you clean and manage your text efficiently.
                </p>

                <h1>🧠 Detailed Version:</h1>
                <p>
                    TextUtils is your smart text companion for everyday use.
                    Designed for writers, students, developers, and content creators, this app makes text formatting fast and effortless.
                    <br /><br />
                    With features like:
                    <br />
                    ✅ Case conversion (UPPERCASE, lowercase, Capitalize)<br />
                    ✅ Word and character counter<br />
                    ✅ Remove extra spaces<br />
                    ✅ Text preview and formatting<br /><br />
                    Our goal is to help you focus on your content, not the formatting.
                    Fast, clean, and easy to use.
                </p>

                <h1>💡 Why TextUtils?</h1>
                <p>
                    TextUtils is built with simplicity in mind. Whether you're drafting an assignment,
                    editing code comments, or preparing content for publishing, this tool saves your time
                    by offering fast, no-fuss text utilities at your fingertips. It’s a must-have for those
                    who value precision, speed, and clean formatting.
                </p>
            </div>

            <div className='mx-5 p-5'>
                <button onClick={handleDarkMood} type="button" className='btn btn-primary'>{btnText}</button>
            </div>
        </div>
    )
}
