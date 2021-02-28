// サマリーのみ関数コンポーネントに置き換える
import React from "react";

type SummaryProps = {
  numOfPeople: number;
  totalAmount: number;
}
const Summary : React.FC<SummaryProps> = props => {
    return (
      <div>
        <div className="party">
          <input type="text" className="party" value={props.numOfPeople} readOnly />
          <span>名前</span>
        </div>
        <div className="total-amount">
          <span>合計</span>
          <input type="text" className="total-amount" value={props.totalAmount} readOnly />  
          <span>円</span>
        </div>
      </div>
    )
}

export default Summary;