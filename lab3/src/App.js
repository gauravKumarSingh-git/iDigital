import './App.css';

const handleSubmit = () => {
  
}

function App() {
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Product ID</label>
          <input type="number" name="id" id="id"/>
        </div>
        <div>
          <label htmlFor="name">Product Name</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div>
          <label htmlFor="cost">Product Cost</label>
          <input type="number" name="cost" id="cost"/>
        </div>
        <div>
          <label>Product Online</label>
          <input type="radio" name="online" id="yes"/>
          <label htmlFor="yes">Yes</label>
          <input type="radio" name="online" id="no"/>
          <label htmlFor="no">No</label>
        </div>
        <div>
          <label htmlFor="category">Product Category</label>
          <select name="category" id="category">
            <option value="grocery">Grocery</option>
            <option value="mobile">Mobile</option>
            <option value="electronics">Electronics</option>
            <option value="cloths">Cloths</option>
          </select>
        </div>
        <div>
          <label>Available in Store</label>
          <input type="checkbox" name="bigBazaar" id="bigBazaar"/>
          <label htmlFor="bigBazaar">Big Bazaar</label>
          <input type="checkbox" name="dmart" id="dmart"/>
          <label htmlFor="dmart">DMart</label>
          <input type="checkbox" name="reliance" id="reliance"/>
          <label htmlFor="reliance">Reliance</label>
          <input type="checkbox" name="megaStore" id="megaStore"/>
          <label htmlFor="megaStore">MegaStore</label>
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default App;
