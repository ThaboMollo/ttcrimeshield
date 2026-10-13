import {
  BusFront,
  CarFront,
  ClipboardList,
  Globe,
  MapPin,
  MessageCircle,
  Route,
  ShieldCheck,
  ShieldUser,
  Truck,
  UserRoundSearch,
  Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "shield-user": ShieldUser,
  globe: Globe,
  route: Route,
  clipboard: ClipboardList,
  message: MessageCircle,
  users: Users,
  van: BusFront,
  steering: CarFront,
  pin: MapPin,
  tow: Truck,
  "shield-car": ShieldCheck,
  search: UserRoundSearch,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? ShieldCheck;
  return <Cmp className={className} strokeWidth={1.4} aria-hidden />;
}
