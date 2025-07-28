import {
    FileText,
    Play,
    Radio,
    Shield
} from "lucide-react";

const courseFeatures = [
  {
    id: 1,
    icon: Play,
    iconColor: "bg-green-500",
    title: "৫০+ ভিডিও লেকচার",
    description:
      "IELTS Academic ও General Training এর Overview, Format ও প্রতিটি ধরন নিয়ে in-depth আলোচনা",
    duration: "25+ ঘন্টা",
    badge: "ভিডিও",
  },
  {
    id: 2,
    icon: FileText,
    iconColor: "bg-blue-500",
    title: "৩৮টি লেকচার শিট",
    description:
      "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং ৬০০+ Vocabulary",
    duration: "PDF ফরম্যাট",
    badge: "ম্যাটেরিয়াল",
  },
  {
    id: 3,
    icon: Shield,
    iconColor: "bg-orange-500",
    title: "রিডিং এন্ড লিসেনিং মক টেস্ট",
    description:
      "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি নিন",
    duration: "20টি টেস্ট",
    badge: "প্র্যাকটিস",
  },
  {
    id: 4,
    icon: Radio,
    iconColor: "bg-red-500",
    title: "ডাউট সলভিং লাইভ ক্লাস",
    description:
      "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রশ্নের সলভিং এর সুযোগ",
    duration: "সাপ্তাহিক",
    badge: "লাইভ",
  },
];

export default function CourseFeatures() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Course Features Section */}
      <div className="space-y-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          কোর্সটি যেভাবে সাজানো হয়েছে
        </h2>

        {/* Features Grid */}
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.id} className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`${feature.iconColor} rounded-full p-3 flex-shrink-0`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
