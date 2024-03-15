export const statsInfo = [
  {
    id: 1,
    text: "Of furtune 500 companies",
    value: "56%",
  },
  {
    id: 2,
    text: "schools use Vaulto",
    value: "5k+",
  },
  {
    id: 3,
    text: "connections and still counting",
    value: "3.5B",
  },
];

//* Features Lists
export const features = [
  {
    featureId: 1,
    featureTitle: "Feature Title 1",
    featureDescription: "Feature One description",
    featureIndex: "01",
    featureImg: "",
  },
  {
    featureId: 2,
    featureTitle: "Feature Title 2",
    featureDescription: "Feature Two description",
    featureIndex: "02",
    featureImg: "",
  },
  {
    featureId: 3,
    featureTitle: "Feature Title 3",
    featureDescription: "Feature Three description",
    featureIndex: "03",
    featureImg: "",
  },
  {
    featureId: 4,
    featureTitle: "Feature Title 4",
    featureDescription: "Feature Four description",
    featureIndex: "04",
    featureImg: "",
  },
];

//* Pricing Model
export const pricingModel = [
  {
    id: 1,
    isPopular: false,
    plan: "Starter",
    description: "File storage for a limited number of users of your school.",
    price: "Free",
    range: "Forever",
    features: [
      {
        featureId: 1,
        feature: "Feature 1",
        isDisabled: false,
      },
      {
        featureId: 2,
        feature: "Feature 2",
        isDisabled: false,
      },
      {
        featureId: 3,
        feature: "Feature 3",
        isDisabled: false,
      },
      {
        featureId: 4,
        feature: "Feature 4",
        isDisabled: false,
      },
      {
        featureId: 5,
        feature: "Feature 5",
        isDisabled: true,
      },
    ],
  },
  {
    id: 2,
    isPopular: true,
    plan: "Business Plus",
    description: "File storage for your entire school management",
    price: "$20",
    range: "per month",
    features: [
      {
        featureId: 1,
        feature: "Feature 1",
        isDisabled: false,
      },
      {
        featureId: 2,
        feature: "Feature 2",
        isDisabled: false,
      },
      {
        featureId: 3,
        feature: "Feature 3",
        isDisabled: false,
      },
      {
        featureId: 4,
        feature: "Feature 4",
        isDisabled: false,
      },
      {
        featureId: 5,
        feature: "Feature 5",
        isDisabled: false,
      },
    ],
  },
  {
    id: 3,
    isPopular: false,
    plan: "Enterprise",
    description:
      "Advanced file storage with regular backups and security checks.",
    price: "$30",
    range: "per month",
    features: [
      {
        featureId: 1,
        feature: "Feature 1",
        isDisabled: false,
      },
      {
        featureId: 2,
        feature: "Feature 2",
        isDisabled: false,
      },
      {
        featureId: 3,
        feature: "Feature 3",
        isDisabled: false,
      },
      {
        featureId: 4,
        feature: "Feature 4",
        isDisabled: false,
      },
      {
        featureId: 5,
        feature: "Feature 5",
        isDisabled: false,
      },
    ],
  },
];

export const differenceData = [
  {
    id: Math.ceil(Math.random() * 10000),
    title: "Sleek & unique dashboard",
    description:
      "Store important backups, photo libraries, thousands of files - all your files in one place",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    title: "All your files in one place",
    description:
      "Store important backups, photo libraries, thousands of files - all your files in one place",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    title: "Ease of use and navigation",
    description:
      "Store important backups, photo libraries, thousands of files - all your files in one place",
  },
];

// SideLinks

export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard/overview",
  },
  {
    id: 2,
    title: "Folders",
    href: "/dashboard/folders",
  },
  {
    id: 3,
    title: "Recents",
    href: "/dashboard/recents",
  },
  {
    id: 4,
    title: "Trash",
    href: "/dashboard/trash",
  },
];
