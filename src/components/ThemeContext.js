import { createContext, useContext, useState } from react;

const ThemeContext = createContext(undefined);
// create context

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    // define context - global state - as theme
    // why "children"?

    return (
        <ThemeContext.ThemeProvider
            value={{
                theme, 
                toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
            }}>
            {children}
        </ThemeContext.ThemeProvider>
    )
}

export const useTheme = () => useContext(ThemeContext);


