import { AsTypescript } from "./domain";
import { Record, Field } from "./record";
import { String, Long } from "./primitives";
import { Array } from "./array";

// primitives
let _ = () => {
  const instance = Record("person", {
    name: Field(String()),
    age: Field(Long()),
  });
  type ActualType = AsTypescript<typeof instance>;
  type ExpectedType = { name: string; age: number };
  const _actualIsExpected = (a: ActualType): ExpectedType => a;
  const _expectedIsActual = (a: ExpectedType): ActualType => a;
};

// other records
_ = () => {
  const recordForField = Record("person", {
    name: Field(String()),
    age: Field(Long()),
  });
  const recordField = Field<typeof recordForField>(recordForField);
  const instance = Record("pet", {
    name: Field(String()),
    owner: recordField,
  });
  type ActualType = AsTypescript<typeof instance>;
  type ExpectedType = {
    name: string;
    owner: {
      name: string;
      age: number;
    };
  };
  const _actualIsExpected = (a: ActualType): ExpectedType => a;
  const _expectedIsActual = (a: ExpectedType): ActualType => a;
};

//array fields
_ = () => {
  const underlying = Array(String())
  const instance = Record("pet", {
    name: Field(String()),
    possessions: Field<typeof underlying>(underlying),
  });
  type ActualType = AsTypescript<typeof instance>;
  type ExpectedType = {
    name: string;
    possessions: string[]
  };
  const _actualIsExpected = (a: ActualType): ExpectedType => a;
  const _expectedIsActual = (a: ExpectedType): ActualType => a;
};

// defaulted and nullable fields
_ = () => {
  const instance = Record("person", {
    name: Field({ type: String(), default: "hello!" }),
    age: Field({ type: Long(), default: null }),
  });
  type ActualType = AsTypescript<typeof instance>;
  type ExpectedType = {
    name: string | null | undefined;
    age: number | null | undefined;
  };
  const _actualIsExpected = (a: ActualType): ExpectedType => a;
  const _expectedIsActual = (a: ExpectedType): ActualType => a;
};

describe("Field construction", () => {
  test("Field constructor should allow documentation on a field", () => {
    const docString = "id of the thing";
    const documentedField = Field({
      type: String(),
      doc: docString,
    });

    expect(documentedField).toHaveProperty("doc", docString);
  });

  test("Field constructor should allow defaulting on a field", () => {
    const defaultString = "hello world!";
    const defaultedField = Field({
      type: String(),
      default: defaultString,
    });

    expect(defaultedField).toHaveProperty("default", defaultString);
  });

  test("Nullable fields should append null to the type", () => {
    const defaultedField = Field({
      type: String(),
      default: null,
    });

    expect(defaultedField.type).toContain("null");
  });
});
