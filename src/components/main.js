import React from 'react';


function Main () {

    const [isDarkTheme, setDarkTheme] = React.useState();
    
    function handleToggleTheme () {
        setDarkTheme(!isDarkTheme);
    }

    return (
        <div className={`main-container ${isDarkTheme ? 'dark' : ''}`}>

            <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
            
            <p>{isDarkTheme ? 
                '"Why did the tomato turn red? Because it saw the salad dressing!"' : 
                '"Why did the scarecrow win an award? Because he was outstanding in his field."'
                }
            </p>

            <div className="button-container">
                <button 
                    className={`button-dark ${isDarkTheme ? 'button-dark' : 'button-light'}`}
                    onClick={handleToggleTheme}
                >
                    Toggle Theme
                </button>
            </div>
        </div>
    );

}
export default Main;

// Instead of having separate functions for normal and dark themes, a single state variable 
// isDarkTheme is used to keep track of the current theme.

// The setDarkTheme function is used to toggle the theme by flipping the value of isDarkTheme.

// The className of the main container is determined based on the value of isDarkTheme, 
// with the dark class being added if it's a dark theme.

// The text inside the h1 tag is determined based on the value of isDarkTheme.

// The text inside the p tag os determined based on the value of isDarkTheme

// The onClick event handler for the button is set to handleToggleTheme to toggle the theme.