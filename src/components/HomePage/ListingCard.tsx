import { Card, CardContent } from "../ui/card";
import { CardHeader } from "../ui/card";
import { useNavigate } from "react-router-dom";

export default function ListingCard() {
  const navigate = useNavigate();
  const id = "123";
  return (
    <Card onClick={() => navigate(`/category/${id}`)} className="cursor-pointer">
      <CardHeader>
        BJJ Private Lessons
        <span className="text-sm text-muted-foreground">Ethan Div</span>
      </CardHeader>
      <CardContent>
        <div className="w-full h-40 bg-red-500" />
      </CardContent>
    </Card>
  );
}
