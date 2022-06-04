import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MlhHackathonBackend } from "../target/types/mlh_hackathon_backend";

describe("MLH-hackathon-backend", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MlhHackathonBackend as Program<MlhHackathonBackend>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
