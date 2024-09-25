import React from "react";
import "./MainContent.css"; // Assuming CSS is kept separate

const MainContent = () => {
  return (
    <div>
      <div className="page-head">Settings</div>

      <div id="salary" className="tab-content active">
        <div className="form-container">
          <div className="div-title">Game Settings</div>
          <form action="#">
            <label htmlFor="signup-bonus">Signup Bonus</label>
            <input
              type="text"
              id="signup-bonus"
              name="signup-bonus"
              className="form-input"
              placeholder="20"
            />

            <label htmlFor="referral-bonus">Referral Bonus</label>
            <input
              type="text"
              id="referral-bonus"
              name="referral-bonus"
              className="form-input"
              placeholder="20"
            />

            <label htmlFor="deposit-bonus">Deposit Bonus %</label>
            <input
              type="text"
              id="deposit-bonus"
              name="deposit-bonus"
              className="form-input"
              placeholder="25"
            />

            <label htmlFor="deposit-for-referral">
              Deposit Bonus for Referral %
            </label>
            <input
              type="text"
              id="deposit-for-referral"
              name="deposit-for-referral"
              className="form-input"
              placeholder="5"
            />

            <label htmlFor="kickback-commission">
              KickBack Commission % (Some amount for player who bet)
            </label>
            <input
              type="text"
              id="kickback-commission"
              name="kickback-commission"
              className="form-input"
              placeholder="0"
            />

            <label htmlFor="game-charge-inpercent">
              Game Charge In Percent
            </label>
            <input
              type="text"
              id="game-charge-inpercent"
              name="game-charge-inpercent"
              className="form-input"
              placeholder="2"
            />

            <label htmlFor="withdraw-limit">
              Withdraw Limit Count In One Day
            </label>
            <input
              type="text"
              id="withdraw-limit"
              name="withdraw-limit"
              className="form-input"
              placeholder="3"
            />

            <label htmlFor="max-withdraw">
              Max Withdraw Amount In One Transaction
            </label>
            <input
              type="text"
              id="max-withdraw"
              name="max-withdraw"
              className="form-input"
              placeholder="100000"
            />

            <label htmlFor="min-withdraw">
              Min Withdraw Amount In One Transaction
            </label>
            <input
              type="text"
              id="min-withdraw"
              name="min-withdraw"
              className="form-input"
              placeholder="110"
            />

            <label htmlFor="upi-payment">UPI Payment Gateway Key</label>
            <input
              type="text"
              id="upi-payment"
              name="upi-payment"
              className="form-input"
              placeholder="20"
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="table-container">
          <div className="div-title">7 Days Recharge Bonus settings</div>
          <form action="#">
            <input type="text" className="bonus-settings bs1" placeholder="0" />
            <input type="text" className="bonus-settings" placeholder="0" />
            <input
              type="text"
              className="bonus-settings bs1"
              placeholder="3000"
            />
            <input type="text" className="bonus-settings" placeholder="0" />
            <input
              type="text"
              className="bonus-settings bs1"
              placeholder="6000"
            />
            <input type="text" className="bonus-settings" placeholder="0" />
            <input
              type="text"
              className="bonus-settings bs1"
              placeholder="12000"
            />
            <input type="text" className="bonus-settings" placeholder="0" />
            <input
              type="text"
              className="bonus-settings bs1"
              placeholder="27000"
            />
            <input type="text" className="bonus-settings" placeholder="0" />
            <input
              type="text"
              className="bonus-settings bs1"
              placeholder="100000"
            />
            <input type="text" className="bonus-settings" placeholder="0" />
            <input
              type="text"
              className="bonus-settings bs1"
              placeholder="2000000"
            />
            <input type="text" className="bonus-settings" placeholder="0" />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="table-container">
          <div className="div-title">Members Wallet (Plus - Minus)</div>
          <form action="#">
            <input
              type="text"
              className="form-input"
              placeholder="Enter Account ID"
            />
            <input
              type="text"
              className="form-input"
              placeholder="------Select Function-------"
            />
            <input type="text" className="form-input" placeholder="Enter Amount" />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="table-container">
          <div className="div-title">Additional / Backup Recharge Settings</div>
          <form action="#">
            <label htmlFor="upi-id-1">UPI ID 1</label>
            <input
              type="text"
              id="upi-id-1"
              name="upi-id-1"
              className="form-input"
              placeholder="abcd1234@ybl"
            />
            <label htmlFor="upi-id-2">UPI ID 2</label>
            <input
              type="text"
              id="upi-id-2"
              name="upi-id-2"
              className="form-input"
              placeholder="abcd1234@ybl"
            />
            <label htmlFor="upi-id-3">UPI ID 3</label>
            <input
              type="text"
              id="upi-id-3"
              name="upi-id-3"
              className="form-input"
              placeholder="abcd1234@ybl"
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="table-container">
          <div className="div-title">Telegram</div>
          <form action="#">
            <label htmlFor="telegram">Telegram</label>
            <input
              type="text"
              id="telegram"
              name="telegram"
              className="form-input"
              placeholder="abcd123456789"
            />
            <label htmlFor="online-services">Online Services</label>
            <input
              type="text"
              id="online-services"
              name="online-services"
              className="form-input"
              placeholder="abcd123456789"
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
