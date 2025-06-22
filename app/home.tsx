import type { Route } from "./+types/home";
import { Button } from "./common/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [{ title: "KTBC" }, { name: "description", content: "KTBC" }];
}

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="flex gap-2">
        <Button variant="outline">Welcome</Button>
        <Button variant="default">KTBC</Button>
      </div>
    </div>
  );
}
