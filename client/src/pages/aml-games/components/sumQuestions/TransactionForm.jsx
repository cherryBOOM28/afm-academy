import React from "react";

const questions = [
  "Получение выигрыша в наличной форме по результатам проведения пари, азартной игры в игорных заведениях и лотереи",
  "Совершенно ломбардом операций с деньгами, ценными бумагами, драгоценными металлами и драгоценными камнями, ювелирными изделиями из них и иными ценностями",
  "Переводы денег за границу на счета (во вклады), открытые на анонимного владельца, поступление денег из-за границы со счета (вклада), открытого на анонимного владельца",
  "Купля-продажа драгоценных металлов и драгоценных камней, ювелирных изделий из них",
  "Платежи и переводы денег, осуществляемые клиентом в пользу другого лица на безвозмездной основе",
  "Снятие с банковского счета или зачисление на банковский счет клиента денег, а равно прием от клиента либо выдача клиенту наличных денег",
  "Сделке с недвижимым имуществом, результатом совершения которой является переход права собственности на такое имущество",
];

const TransactionForm = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1A2751",
          height: "50px",
          borderRadius: "10px 10px 0 0",
          
        }}
      ></div>
      {questions.map((question, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",

          }}
        >
          <div
            className="blue-header"
            style={{ backgroundColor: "#1A2751", borderRadius: "10px" }}
          ></div>
          <label
            htmlFor={`amount-${index}`}
            style={{ flex: 1, marginRight: "10px", fontSize: "1.125rem", marginTop: index === 0 ? '10px':null }}
          >
            {question}
          </label>
          <input
            id={`amount-${index}`}
            type="number"
            placeholder="Введите сумму"
            style={{
              flex: "0 0 200px",
              padding: "5px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#D9D9D9",
              minHeight: "20px",
              minWidth: "134px",
              marginTop: index === 0 ? '10px':null
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TransactionForm;
