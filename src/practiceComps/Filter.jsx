import React, { useState } from "react";
import allBanks from "./Allbanks";

const Filter = () => {
  const [selectBank, setSelectBank] = useState("");

  const filterdBank = allBanks.filter((bank) => {
    // return console.log(bank.BankName);
    return bank.BankName.toLowerCase().includes(selectBank.toLowerCase());
  });

  console.log(selectBank);
  console.log(filterdBank);

  return (
    <>
      <div>
        <h2>Search Here</h2>
        <input
          placeholder="Search Here"
          onChange={(e) => setSelectBank(e.target.value)}
        />
      </div>

      <div>Bank Name</div>
      <ul>
        {filterdBank.map((bank) => {
          return <li>{bank.BankName}</li>;
        })}
      </ul>
    </>
  );
};

export default Filter;
