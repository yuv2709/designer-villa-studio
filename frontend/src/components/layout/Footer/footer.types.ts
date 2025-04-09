import React from "react";

export type SocialNetworks = {
  id: number;
  icon: React.ReactNode;
  url: string;
};

export type FLink = {
  id: string;
  label: string;
  url: string;
};

export type FooterLinks = {
  id: string;
  title: string;
  children: FLink[];
};

export type PaymentBadge = {
  id: number;
  srcUrl: string;
};
