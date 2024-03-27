import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

function Controls() {

    return (
        <div className="w-min flex gap-2">
            <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
            </Button>
            <Input 
                placeholder="Search"
                className="w-min"
            />
        </div>
    )
}

export default Controls
