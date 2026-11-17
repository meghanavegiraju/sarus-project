// All site content lives here as static data — no API, no database.

export const LOGO = "https://sarus.co.in/wp-content/uploads/2023/03/Sarus-Final-Logo1.png";
export const MARK = "https://sarus.co.in/wp-content/uploads/2023/03/cropped-Sarus-Final-Logo-2-512x510-1.png";

export const CONTACT = {
  email: "info@sarus.co.in",
  phone: "+91 91549 54662",
  phoneHref: "tel:+919154954662",
  hours: "Monday – Saturday",
  hoursTime: "9:30 AM – 7:30 PM",
  address:
    "3rd Floor, Spaces and More Business Center II, Akshara Grand, Gachibowli, Hyderabad, Telangana – 500032",
  mapsLink:
    "https://maps.google.com/?q=Sarus+Infrastructures+Private+Limited+Akshara+Grand+Gachibowli+Hyderabad",
  mapsEmbed:
    "https://maps.google.com/maps?q=Sarus%20Infrastructures%20Private%20Limited%2C%20Akshara%20Grand%2C%20Lumbini%20Avenue%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032&t=m&z=15&output=embed&iwloc=near",
  linkedin: "https://in.linkedin.com/company/sarus-infrastructures-private-limited",
};

export type Project = {
  nh?: string;
  image?: string;
  alt?: string;
  state: string;
  title: string;
  description: string;
  chainFrom: string;
  chainTo: string;
  duration: string;
  value: string;
  sign?: { small: string; big: string };
};

export const OUR_PROJECTS: Project[] = [
  {
    nh: "NH-34",
    image: "https://sarus.co.in/wp-content/uploads/2023/03/DJI_0065-imp-1536x1152.webp",
    alt: "Aerial view of NH-34",
    state: "West Bengal",
    title: "Farakka – Raiganj",
    description:
      "Rehabilitation, bitumen overlay, micro-surfacing and associated ancillary works of the Farakka – Raiganj section on NH-34.",
    chainFrom: "KM 295+000",
    chainTo: "KM 395+000",
    duration: "1 Year",
    value: "₹82.6 Cr",
  },
  {
    nh: "NH-44",
    image: "https://sarus.co.in/wp-content/uploads/2023/03/IMG-20230223-WA0006-1536x864.jpg",
    alt: "Kothakota – Kurnool section",
    state: "Andhra Pradesh",
    title: "Kothakota – Kurnool",
    description:
      "Construction of service road, improvement of junctions and construction of ramp VUP to MCW of the Kothakota – Kurnool section of NH-44 (old NH-07).",
    chainFrom: "KM 136+077",
    chainTo: "KM 210+699",
    duration: "1 Year",
    value: "₹14.9 Cr",
  },
  {
    nh: "NH-75",
    image: "https://sarus.co.in/wp-content/uploads/2023/03/DSC_9376.webp",
    alt: "Nelamangala – Devihalli section",
    state: "Karnataka",
    title: "Nelamangala – Devihalli",
    description:
      "Overlay and rehabilitation work of the Nelamangala – Devihalli section on NH-75 (earlier NH-48), cart-track portion.",
    chainFrom: "KM 65.000",
    chainTo: "KM 80.000",
    duration: "45 Days",
    value: "₹3.23 Cr",
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    sign: { small: "Mumbai", big: "Eastern Express Hwy" },
    state: "Maharashtra",
    title: "Eastern Express Highway",
    description:
      "Renewal of main carriageway and service road with bituminous treatment from Golden Dyes Junction to Sion Junction on the Eastern Express Highway.",
    chainFrom: "CH 561+200",
    chainTo: "CH 584+750",
    duration: "1 Year",
    value: "₹30.0 Cr",
  },
];

export const SLIDES = [
  { src: "https://sarus.co.in/wp-content/uploads/2021/02/sld-1-795x525-1.jpg", alt: "Greenfield project", label: "Greenfield Projects" },
  { src: "https://sarus.co.in/wp-content/uploads/2021/02/slider_bg-795x525-1.jpg", alt: "Brownfield project", label: "Brownfield Projects" },
  { src: "https://sarus.co.in/wp-content/uploads/2021/02/slide-2-795x525-1.jpg", alt: "Brownfield project", label: "Brownfield Projects" },
  { src: "https://sarus.co.in/wp-content/uploads/2021/02/Image-81-795x525-1.png", alt: "Greenfield project", label: "Greenfield Projects" },
];

const GALLERY_BASE = "https://sarus.co.in/wp-content/uploads/2023/04/";
export const GALLERY = [
  "P2-1536x865.webp", "P1.webp", "P001.webp", "7-1536x1152.webp", "003-1536x1152.webp",
  "03-1536x1098.webp", "04-1536x1022.webp", "4-1536x1022.webp", "5-1536x1022.webp",
  "6-1536x1022.webp", "2-1536x1022.webp", "1-1536x1022.webp", "P6-1536x865.webp",
  "urban-infra-1536x727.jpg",
].map((f) => GALLERY_BASE + f);
