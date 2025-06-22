import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "KTBC" }, { name: "description", content: "KTBC" }];
}

export default function Home() {
  return <div>Home</div>;
}
