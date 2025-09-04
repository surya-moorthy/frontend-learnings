
export default function Form() {
    function Submit() {

    }
  return (
    <form onSubmit={Submit}>
           <h4>
               Language experience
           </h4>
          <div>
                <label htmlFor="name">Enter your name:</label>
                <input type="text" name="name" id="name" className="" required={true}/>
          </div>
          <div>
                <label htmlFor="language">Language:</label>
                 <select name="language" id="language">
                    <option value="Javascript">Javascript</option>
                    <option value="Python">Python</option>
                    <option value="C">C</option>
                    <option value="Go">Golang</option>
                    <option value="Rust">Rust</option>
                    <option value="Solidity">Solidity</option>
                 </select>
          </div>
          <div>
                <label htmlFor="experience">Experience:</label>
                <select name="experience" id="experience">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Pro">Pro</option>
                </select>
          </div>
          <div>
                <label htmlFor="reason">Name of the Language:</label>
                <input type="text" name="reason" id="reason" className="" required={true}/>
          </div>
          <button type="submit">
              Submit
          </button>
    </form>
  )
}
