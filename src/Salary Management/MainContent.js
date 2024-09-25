import React from "react";
import "./MainContent.css"; // Assuming CSS is kept separate

const MainContent = () => {
  return (
    <div>
      <div className="page-head">Salary Management</div>
      {/* Form Section */}
      <div className="form-section">
        <form action="#" method="POST">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" name="id" required />

          <label htmlFor="min-refers">Min Refers</label>
          <input type="text" id="min-refers" name="min-refers" required />

          <label htmlFor="min-deposit">Min Deposit</label>
          <input type="text" id="min-deposit" name="min-deposit" required />

          <label htmlFor="reward">Reward</label>
          <input type="text" id="reward" name="reward" required />

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <h2 className="table-head">Salary Management</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Min Refers</th>
              <th>Min Deposit</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123</td>
              <td>5</td>
              <td>4500</td>
              <td>300</td>
            </tr>
            <tr>
              <td>124</td>
              <td>3</td>
              <td>3500</td>
              <td>200</td>
            </tr>
            <tr>
              <td>125</td>
              <td>4</td>
              <td>4000</td>
              <td>250</td>
            </tr>
            <tr>
              <td>126</td>
              <td>2</td>
              <td>2500</td>
              <td>150</td>
            </tr>
            <tr>
              <td>127</td>
              <td>6</td>
              <td>5000</td>
              <td>350</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
