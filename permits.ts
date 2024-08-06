import { ethers } from "ethers";
import { EthersProvider, FhenixClient, getPermit } from "fhenixjs";

export const lendingPoolAddress = "0xED18a7af35A41A9AAee7eccaAfAf60E42536eA69";
export const provider = new ethers.BrowserProvider((window as any).ethereum);

export const fhenixClient = new FhenixClient({ provider });
export async function generatePermits(
  contractAddress: string,
  provider: EthersProvider,
) {
  const permit = await getPermit(contractAddress, provider!);
  fhenixClient.storePermit(permit);
  const permission = fhenixClient.extractPermitPermission(permit);
  return permission;
}
