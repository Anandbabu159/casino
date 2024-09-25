import React from "react";
import "./MainContent.css"; // Assuming CSS is kept separate

const MainContent = () => {
  return (
    <div>
      <div className="page-head">Gift Codes</div>

      <div className="form-section">
        <form action="#" method="POST">
          <label htmlFor="gift-code">Gift code</label>
          <input
            type="text"
            id="gift-code"
            name="gift-code"
            placeholder="Enter the amount"
            required
          />

          <label htmlFor="users">Users</label>
          <input
            type="text"
            id="users"
            name="users"
            placeholder="Enter the no of users"
            required
          />

          <button type="submit">CREATE</button>
        </form>
      </div>

      <div className="table-section">
        <h2 className="table-head">Gift Code has not been used yet</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Creator</th>
              <th>Gift Code Amount</th>
              <th>Users</th>
              <th>Already Used</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ZLEUSHCH847jhdyf</td>
              <td>
                <a href="#">7356988952</a>
              </td>
              <td>10000</td>
              <td>2536</td>
              <td>
                <span className="status not-used">Not used yet</span>
              </td>
              <td>2024-08-09 2:20:55 AM</td>
            </tr>
            <tr>
              <td>ZLEUSHCH847jhdyf</td>
              <td>
                <a href="#">7356988952</a>
              </td>
              <td>10000</td>
              <td>2536</td>
              <td>
                <span className="status not-used">Not used yet</span>
              </td>
              <td>2024-08-09 2:20:55 AM</td>
            </tr>
            <tr>
              <td>ZLEUSHCH847jhdyf</td>
              <td>
                <a href="#">7356988952</a>
              </td>
              <td>10000</td>
              <td>2536</td>
              <td>
                <span className="status not-used">Not used yet</span>
              </td>
              <td>2024-08-09 2:20:55 AM</td>
            </tr>
            <tr>
              <td>ZLEUSHCH847jhdyf</td>
              <td>
                <a href="#">7356988952</a>
              </td>
              <td>10000</td>
              <td>2536</td>
              <td>
                <span className="status not-used">Not used yet</span>
              </td>
              <td>2024-08-09 2:20:55 AM</td>
            </tr>
            <tr>
              <td>ZLEUSHCH847jhdyf</td>
              <td>
                <a href="#">7356988952</a>
              </td>
              <td>10000</td>
              <td>2536</td>
              <td>
                <span className="status not-used">Not used yet</span>
              </td>
              <td>2024-08-09 2:20:55 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
