export default function Hero()  {
    return (
        <div className="hero-root">
            <div className="badge">
                <span>What are from 1099 filing requirements?</span>
                <svg width="10" height="8" fill="none"><path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path></svg>
            </div>
            <h1 className="hero-title">
                Magically simplify accounting and taxes
            </h1>
            <p className="desc">
                Automated bookkeeping, effortless tax filing, real‑time insights. 
                Set up in 10 mins. Back to building by 9:40am.
            </p>

            <div className="hero-cta">
                <button  className="buttonlee">
                       Start free trial
                </button>
                 <button className="secondary-btn">
                    <span> Pricing </span>
                   <svg width="20" height="15" fill="none"><path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path></svg>
              </button>
            </div>

            <p className="desc-sec"> Currently for US-based Delaware C-Corps. </p>
        </div>
    )
}