import React from "react";

const ShipingDetails = () => (
  <>
  <h4>Personal data</h4>
  <form action="">
    <div>
      <label htmlFor="name">Full name</label>
      <input type="text" placeholder="Full name" />
    </div>
    <div>
      <label htmlFor="nationality">Nationality</label>
      <select>
        <option value disabled selected>
          Nationality
        </option>
        {nationalities.map(nationality => (
            <option>
                nationality
            </option>
        ))}          
      </select>
    </div>
    <div>
      <label htmlFor="gender">Gender</label>
      <select>
        <option value disabled selected>
          Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <i class="fas fa-caret-down" />
    </div>
    <div>
        <button className="btn">Next</button>
    </div>
  </form>
</>
);

export default ShipingDetails;
