import { useEffect, useState } from "react"
import { Switch } from "./ui/switch"

function ThemeSwitch() {
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") === "dark")

    const handleSwitchClick = () => {
        const newTheme = !darkTheme ? "dark" : "light"
        setDarkTheme(!darkTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme) {
            setDarkTheme(storedTheme === "dark")
            document.documentElement.classList.toggle("dark", storedTheme === "dark")
        }
    }, [])

    return (
        <div className="flex items-center gap-2">
            <Switch 
                checked={darkTheme}
                onCheckedChange={handleSwitchClick}
            />
            <p>Theme</p>
        </div>
    )
}

export default ThemeSwitch
