import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, newData } from "../generated/Contract/Contract"
import { pushData } from "../generated/schema"

export function handlenewData(event: newData): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = pushData.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new pushData(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
    entity.amount = BigInt.fromI32(1)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(2)
  entity.amount = entity.amount + BigInt.fromI32(3)

  // Entity fields can be set based on event parameters
  entity.name = event.params.name
  entity.origin = event.params.origin
  entity.businessName = event.params.businessName
  entity.product = event.params.product
  entity.batch = event.params.batch
  entity.packing = event.params.packing

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.data(...)
}
