import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

interface ReviewCardProps {
  reviewerName: string;
  rating: number;
  date: string;
  content: string;
  profileImage?: string;
}

export default function ReviewCard({
  reviewerName,
  rating,
  date,
  content,
  profileImage = '/default-avatar.png',
}: ReviewCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <img
          src={profileImage}
          alt={`${reviewerName}'s profile`}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{reviewerName}</h3>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < rating ? 'fill-current' : 'fill-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-muted-foreground text-sm">{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
}
