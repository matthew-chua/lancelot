import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function CategoryCard() {
  return (
    <Card>
      <CardContent>
        <div className="w-full h-40 bg-red-500" />
      </CardContent>
      <CardHeader>Category Name</CardHeader>
    </Card>
  );
}
