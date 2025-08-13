import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Dashboard() {

    const navigate = useNavigate();

    const handlelogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div>
              Entering into the dashboard.

              <button 
              onClick={handlelogout}
              className="px-4 py-2 bg-blue-500 font-bold text-lg">
                  Logout
              </button>
        </div>
    )
}