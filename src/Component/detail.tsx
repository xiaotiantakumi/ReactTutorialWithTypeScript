import React from "react";

export type FeeClassification = {
  name: string;
  description: string;
  unitPrice: number;
  numOfPeople: number;
  totalPrice: number;
}

export type DetailProps = {
  classification: FeeClassification;
  onNumOfPeopleChange: (num: number) => void;
}

export type DetailState = {
  numOfPeople: number;
}

export class Detail extends React.Component<DetailProps,DetailState>{

  /**
   *
   */
  constructor(props: DetailProps) {
    super(props);
    this.state= {
      numOfPeople: this.props.classification.numOfPeople
    }
  }
  onNumOfPeopleChange(e:React.ChangeEvent<HTMLSelectElement>): void {
    const num: number = Number(e.target.value);
    this.props.onNumOfPeopleChange(num);
  }
  render() {
    return (
      <div>
        <div className="classification-name">{this.props.classification.name}</div>
        <div className="description">{this.props.classification.description}</div>
        <div className="unit-price">{this.props.classification.unitPrice}</div>
        <div className="num-people">
          <select value={this.props.classification.numOfPeople}
          onChange={e => this.onNumOfPeopleChange(e)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    )
  }
}