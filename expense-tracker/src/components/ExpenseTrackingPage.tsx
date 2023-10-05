import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "./ExpenseTracking.css";
import CategoryListPage from "./CategoryListPage";

export enum ExpenseTypeEnum {
  CashIn = "Cash In",
  CashOut = "Cash Out",
}

function ExpenseTrackingPage() {
  const [activeTab, setActiveTab] = useState("tabcontent1");
  const [expenseType, setExpenseType] = useState<`${ExpenseTypeEnum}`>(
    ExpenseTypeEnum.CashIn
  );

  const handleTab = (val: any) => {
    setActiveTab(val);
  };

  return (
    <div>
      <Header
        title={
          activeTab === "tabcontent1" ? "Expense Tracking" : "Category List"
        }
        activeTab={activeTab}
      />
      <section className="main-contanier">
        <div
          id="Expense"
          className={activeTab === "tabcontent1" ? "active" : "tabcontent"}
        >
          <section className="content-container">
            <div className="content-heading">
              <span className="expenseDate">7/2021</span>
              <span className="totalExpense">- $2000</span>
            </div>
            <ul className="content-list">
              <li className="content-lists">
                <span className="expenseName">Entertainment</span>{" "}
                <span className="expenseAmount">- $5000</span>
              </li>
              <li className="content-lists">
                <span className="expenseName">Transportation</span>{" "}
                <span className="expenseAmount">- $500</span>
              </li>
              <li
                className={
                  expenseType === "Cash In" ? "content-lists displayGreen" : ""
                }
              >
                <span className="expenseName">Work</span>{" "}
                <span className="expenseAmount">+ $4000</span>
              </li>
            </ul>
          </section>
        </div>
        <div
          id="category"
          className={activeTab === "tabcontent2" ? "active" : "tabcontent"}
        >
          <CategoryListPage />
        </div>
      </section>
      <Footer handleTab={handleTab} activeTab={activeTab} />
    </div>
  );
}

export default ExpenseTrackingPage;
