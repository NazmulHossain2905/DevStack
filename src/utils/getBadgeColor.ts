const badgeColors: Record<string, string> = {
  Popular: "border-blue-200 bg-blue-50 text-blue-500",
  "Top SQL": "border-blue-200 bg-blue-50 text-blue-500",
  Essential: "border-blue-200 bg-blue-50 text-blue-500",
  Robust: "border-blue-200 bg-blue-50 text-blue-500",
  Containers: "border-blue-200 bg-blue-50 text-blue-500",

  Versatile: "border-green-200 bg-green-50 text-green-500",
  Standard: "border-green-200 bg-green-50 text-green-500",

  Fast: "border-orange-200 bg-orange-50 text-orange-500",

  "SSR / Edge": "border-purple-200 bg-purple-50 text-purple-500",

  Cache: "border-red-200 bg-red-50 text-red-500",

  Ubiquitous: "border-yellow-200 bg-yellow-50 text-yellow-500",

  Modern: "border-cyan-200 bg-cyan-50 text-cyan-500",
};

export default function getBadgeColor(badge: string) {
  return badgeColors[badge] ?? "border-gray-200 bg-gray-50 text-gray-500";
}
