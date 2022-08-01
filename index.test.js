import { New_Signer } from "./index.js";

it("is browser intilaizing", () => {
  let signer = New_Signer();
  signer.init().then(() => {
    expect(signer.browser !== undefined).toBe(true);
  });
});
