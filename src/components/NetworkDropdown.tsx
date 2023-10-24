import { useMemo } from "react";
import { useNetwork } from "../hooks/useNetwork";
import { capitalize } from "../utils/capitalize";
import { updateSearchString } from "../utils/updateSearchString";
import { DropdownMenu } from "../components/DropdownMenu";
import { useSearch } from "wouter/use-location";
import { useWallet } from "../hooks/useWallet";

const NetworkDropdown = () => {
  const searchString = useSearch();
  const { netName, netNames } = useNetwork();
  const { isLoading, stargateClient, walletAddress } = useWallet();
  const title = netName ? capitalize(netName) : "Select Network";

  const items = useMemo(
    () =>
      netNames.map((network) => ({
        label: capitalize(network),
        href: updateSearchString({ network }),
      })),
    // incl searchString to regenerate links if query params change
    [netNames, searchString]
  );

  const status = useMemo(() => {
    if (isLoading) return "loading";
    if (stargateClient) return "active";
    if (!walletAddress) return "default";
    return "error";
  }, [isLoading, stargateClient, walletAddress]);

  return <DropdownMenu title={title} items={items} status={status} />;
};

export { NetworkDropdown };
