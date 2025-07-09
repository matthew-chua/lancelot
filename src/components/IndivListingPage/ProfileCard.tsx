import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ProfileCard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Profile</h2>
      <Card className="max-w-lg">
        <CardHeader>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <CardTitle>Ethan Div</CardTitle>
              <CardDescription>BJJ Black Belt</CardDescription>
              <CardDescription>Some other stats here</CardDescription>
            </div>
            <div className="h-24 aspect-square bg-red-500" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. THis can be used for a short bio or introduction.
          </p>
          <h2 className="text-lg font-bold">Contact Me</h2>
          <div className="flex flex-col gap-2">
            <p>Email: ethan@div.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Location: New York, NY</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
