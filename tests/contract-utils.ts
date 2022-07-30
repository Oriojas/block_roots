import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { newData } from "../generated/Contract/Contract"

export function createnewDataEvent(
  name: string,
  origin: string,
  businessName: string,
  product: string,
  batch: string,
  packing: string,
  amount: BigInt,
  wallet: Address
): newData {
  let newDataEvent = changetype<newData>(newMockEvent())

  newDataEvent.parameters = new Array()

  newDataEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  newDataEvent.parameters.push(
    new ethereum.EventParam("origin", ethereum.Value.fromString(origin))
  )
  newDataEvent.parameters.push(
    new ethereum.EventParam(
      "businessName",
      ethereum.Value.fromString(businessName)
    )
  )
  newDataEvent.parameters.push(
    new ethereum.EventParam("product", ethereum.Value.fromString(product))
  )
  newDataEvent.parameters.push(
    new ethereum.EventParam("batch", ethereum.Value.fromString(batch))
  )
  newDataEvent.parameters.push(
    new ethereum.EventParam("packing", ethereum.Value.fromString(packing))
  )
  newDataEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  newDataEvent.parameters.push(
    new ethereum.EventParam("wallet", ethereum.Value.fromAddress(wallet))
  )

  return newDataEvent
}
