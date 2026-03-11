"use client";

import {
  FaPaypal,
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

const iconClass = "h-5 w-5 shrink-0";

export function PayPalIcon({ className }: { className?: string }) {
  return <FaPaypal className={className ?? iconClass} aria-hidden />;
}

export function TikTokIcon({ className }: { className?: string }) {
  return <FaTiktok className={className ?? iconClass} aria-hidden />;
}

export function InstagramIcon({ className }: { className?: string }) {
  return <FaInstagram className={className ?? iconClass} aria-hidden />;
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return <FaWhatsapp className={className ?? iconClass} aria-hidden />;
}
