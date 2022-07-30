// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class newData extends ethereum.Event {
  get params(): newData__Params {
    return new newData__Params(this);
  }
}

export class newData__Params {
  _event: newData;

  constructor(event: newData) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get origin(): string {
    return this._event.parameters[1].value.toString();
  }

  get businessName(): string {
    return this._event.parameters[2].value.toString();
  }

  get product(): string {
    return this._event.parameters[3].value.toString();
  }

  get batch(): string {
    return this._event.parameters[4].value.toString();
  }

  get packing(): string {
    return this._event.parameters[5].value.toString();
  }

  get amount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get wallet(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class Contract__dataResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: BigInt;
  value7: Address;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: string,
    value4: string,
    value5: string,
    value6: BigInt,
    value7: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    map.set("value5", ethereum.Value.fromString(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getOrigin(): string {
    return this.value1;
  }

  getBusinessName(): string {
    return this.value2;
  }

  getProduct(): string {
    return this.value3;
  }

  getBatch(): string {
    return this.value4;
  }

  getPacking(): string {
    return this.value5;
  }

  getAmount(): BigInt {
    return this.value6;
  }

  getWallet(): Address {
    return this.value7;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  data(): Contract__dataResult {
    let result = super.call(
      "data",
      "data():(string,string,string,string,string,string,uint256,address)",
      []
    );

    return new Contract__dataResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toString(),
      result[5].toString(),
      result[6].toBigInt(),
      result[7].toAddress()
    );
  }

  try_data(): ethereum.CallResult<Contract__dataResult> {
    let result = super.tryCall(
      "data",
      "data():(string,string,string,string,string,string,uint256,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__dataResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toString(),
        value[5].toString(),
        value[6].toBigInt(),
        value[7].toAddress()
      )
    );
  }
}

export class PushDataCall extends ethereum.Call {
  get inputs(): PushDataCall__Inputs {
    return new PushDataCall__Inputs(this);
  }

  get outputs(): PushDataCall__Outputs {
    return new PushDataCall__Outputs(this);
  }
}

export class PushDataCall__Inputs {
  _call: PushDataCall;

  constructor(call: PushDataCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _origin(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _businessName(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _product(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _batch(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _packing(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _amount(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class PushDataCall__Outputs {
  _call: PushDataCall;

  constructor(call: PushDataCall) {
    this._call = call;
  }
}
