import { AsTypescript } from "./domain";
import { Union } from "./union";
import { String, Long, Boolean } from "./primitives";
import { LogicalType } from "./logicalType";

// primitives
let _ = () => {
  const instance = Union([String(), Long()]);
  type ActualType = AsTypescript<typeof instance>;
  type ExpectedType = string | number;
  const _actualIsExpected = (a: ActualType): ExpectedType => a;
  const _expectedIsActual = (a: ExpectedType): ActualType => a;
};

// logicals
_ = () => {
  const instance = Union([
    LogicalType(String(), "timestamp-utc" as any),
    LogicalType(Long(), "timestamp-millis" as any),
  ]);
  type ActualType = AsTypescript<typeof instance>;
  type ExpectedType = string | number;
  const _actualIsExpected = (a: ActualType): ExpectedType => a;
  const _expectedIsActual = (a: ExpectedType): ActualType => a;
};

// other unions
_ = () => {
  const instance = Union([
    Union([String(), Long()]),
    Union([String(), Boolean()]),
  ]);
  type ActualType = AsTypescript<typeof instance>;
  type ExpectedType = string | number | boolean;
  const _actualIsExpected = (a: ActualType): ExpectedType => a;
  const _expectedIsActual = (a: ExpectedType): ActualType => a;
};

describe("Union construction", () => {
  test("should construct a valid avro union", () => {
    expect(Union([String(), Boolean()])).toEqual(["string", "boolean"]);
  });
});
