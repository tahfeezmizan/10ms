import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Clock,
  Play,
  BookOpen,
  FileText,
  Video,
  Hand,
  MessageCircle,
  Infinity,
  Phone,
} from "lucide-react";
import Link from "next/link";

export function CourseCard() {
  // Course features data
  const courseFeatures = [
    {
      icon: Users,
      text: "কোর্সটি করছেন ৩০০০৩ জন",
      description: "30003 people are taking this course",
    },
    {
      icon: Clock,
      text: "সময় লাগবে ৫০ ঘন্টা",
      description: "Takes 50 hours",
    },
    {
      icon: Play,
      text: "৫৪টি ভিডিও",
      description: "54 videos",
    },
    {
      icon: BookOpen,
      text: "১০টি রিডিং এবং ১০টি লিভের রক টেস্ট",
      description: "10 readings and 10 live rock tests",
    },
    {
      icon: FileText,
      text: "৩৮টি লেকচার শিট",
      description: "38 lecture sheets",
    },
    {
      icon: Video,
      text: "২৫টি ভিডিও লেকচার",
      description: "25 video lectures",
    },
    {
      icon: Hand,
      text: "১টি ফ্রি হ্যান্ডস্ অন",
      description: "1 free hands-on",
    },
    {
      icon: MessageCircle,
      text: "ফেসবুক সাপোর্ট গ্রুপ",
      description: "Facebook support group",
    },
    {
      icon: Infinity,
      text: "কোর্সের লাইফটাইম অ্যাক্সেস",
      description: "Lifetime course access",
    },
  ];

  return (
    <div className="w-auto md:w-96 ">
      <Card className=" max-w-full rounded-none shadow-none border-t-0">
        <CardHeader className="pb-4 md:pb-0">
          {/* Price Section */}
          <div className="space-y-4 inline-block text-2xl font-semibold">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">৳3850</span>
              <span className="text-lg text-gray-500 line-through">৳5000</span>
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1">
                ৳1150 ছাড়
              </Badge>
            </div>

            {/* Buy Button */}
            <Link href="https://app.10minuteschool.com/checkout">
              <Button className="w-full bg-primary hover:bg-green-700 rounded-sm text-white font-medium py-3 text-base cursor-pointer">
                কোর্সটি কিনুন
              </Button>
            </Link>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Course Features Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              এই কোর্সে যা থাকছে
            </h3>

            <div className="space-y-3">
              {courseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Contact Section */}

      <div className=" flex items-center justify-between pt-4">
        <p className="text-sm text-[#a3a3a3]">
          কোর্সটি সম্পর্কে বিস্তারিত জানতে
        </p>
        <a
          href="tel:16910"
          className="flex items-center gap-1 text-green-600 underline cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">ফোন করুন (16910)</span>
        </a>
      </div>
    </div>
  );
}
