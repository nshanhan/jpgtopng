import { Button, Image, Announcement } from "@/types/blocks/base";
export interface Hero {
  name?: string;
  disabled?: boolean;
  title?: string;
  upLoadButton: any;
  downloadButton: string;
  logo?: Logo;
  show_locale?: boolean;
}
export interface Logo {
  href: string;
  label: string;
  src: string;
  alt: string;
}
