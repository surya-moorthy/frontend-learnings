import { link } from "fs"

const links = [
    {
        title : "Guide",
        href : "/guide"
    },
    {
        title : "Pricing",
        href : "#",
    },
    {
        title : "Login",
        href : "#"
    }

]

export const Navbar = () => {
    return (
        <div className="navbar-root">
           <div className="logo">Fintech</div>
           <div className="links">
                {
                links.map((link,index)=> {
                    return (
                        <a key={link.title} href={link.href} className="link-item">
                            {link.title}
                        </a>
                    )
                })
            }
            <button className="buttonlee">
                Start free trial
            </button>
           </div>
        </div>
    )
}