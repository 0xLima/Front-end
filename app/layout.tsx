import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import bgSrc from "./bg.png";
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
  EthersExtension,
} from "../lib/dynamic";
import { cn } from "../lib/utils";
import { TooltipProvider } from "../components/ui/tooltip";
import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer/footer";
import React from "react";
import { UserContextProvider } from "../components/ui/userContextProvider";
import { BalanceProvider } from "../components/ui/balanceProvider";
import { SuccessDialogRoot } from "../components/ui/successDialogRoot";
import icon from "../components/ui/icons/FHEIcon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shadefi",
  description: "Privacy-first app for lending and borrowing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex flex-col items-center bg-main-gradient min-h-screen",
        )}
      >
        <DynamicContextProvider
          settings={{
            appLogoUrl: icon.src,
            appName: "shadefi",
            environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
            evmNetworks: [
              {
                blockExplorerUrls: ["https://explorer.testnet.fhenix.zone/"],
                chainId: 42069,
                chainName: "Fhenix Frontier",
                iconUrls: [icon.src],
                name: "Fhenix",
                nativeCurrency: {
                  decimals: 18,
                  name: "Fhenix",
                  symbol: "tFHE",
                },
                networkId: 42069,
                rpcUrls: ["https://api.testnet.fhenix.zone:7747/"],
                vanityName: "Fhenix F",
              },
            ],
            // walletsFilter: FilterChain("tFHE"),
            walletConnectors: [EthereumWalletConnectors],
            walletConnectorExtensions: [EthersExtension],
          }}
        >
          <DynamicWagmiConnector>
            <UserContextProvider>
              <BalanceProvider>
                <TooltipProvider>
                  <SuccessDialogRoot>
                    <div
                      className="max-w-[1240px] w-full flex flex-col bg-no-repeat bg-cover flex-grow"
                      style={{
                        backgroundImage: `url('${bgSrc.src}')`,
                        backgroundSize: "80%",
                        backgroundPositionY: 280,
                        backgroundPositionX: "center",
                      }}
                    >
                      <Header />
                      {children}
                    </div>
                    <Footer />
                  </SuccessDialogRoot>
                </TooltipProvider>
              </BalanceProvider>
            </UserContextProvider>
          </DynamicWagmiConnector>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
