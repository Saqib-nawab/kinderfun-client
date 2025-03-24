// src/pages/Blog.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChild,
  faMusic,
  faPuzzlePiece,
  faChalkboardTeacher,
  faPalette,
  faBookReader,
  faHandsHelping,
  faGraduationCap,
  faChalkboardUser,
  faCamera,
  faPaintBrush,
  faLanguage,
  faSmile,
  faHandSparkles,
  faGamepad,
  faTabletAlt,
  faAppleAlt,
  faShieldAlt,
  faTree,
  faGlobe,
  faTheaterMasks,
  faLeaf,
  faHandPaper,
  faUsers,
  faFlask,
  faScroll,
  faHome,
  faStar,
  faMicrophone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Define a Category interface for internal categories
interface Category {
  name: string;
  description: string;
  icon: IconDefinition;
  slug: string;
}

// Define a BlogData interface for blog items
export interface BlogData {
  id: string;
  category: string;
  title: string;
  image: string;
  description: string;
}

// Define the props interface for the BlogCategories component
interface BlogCategoriesProps {
  blogs: BlogData[];
}

// Our internal 30 categories array
const categories: Category[] = [
  {
    name: "Early Learning & Development",
    description: "Explore cognitive milestones and early education research.",
    icon: faChild,
    slug: "early-learning-development",
  },
  {
    name: "Nursery Rhymes & Music",
    description:
      "Discuss the benefits of nursery rhymes and music-based learning.",
    icon: faMusic,
    slug: "nursery-rhymes-music",
  },
  {
    name: "Learning Through Play",
    description: "Activities and tips for promoting play-based learning.",
    icon: faPuzzlePiece,
    slug: "learning-through-play",
  },
  {
    name: "ABCs & Numbers",
    description: "Creative methods to teach letters and numbers.",
    icon: faChalkboardTeacher,
    slug: "abcs-numbers",
  },
  {
    name: "Colors & Shapes Exploration",
    description: "Fun activities for exploring colors and shapes.",
    icon: faPalette,
    slug: "colors-shapes-exploration",
  },
  {
    name: "Moral Stories & Values",
    description: "Stories about kindness, sharing, and good habits.",
    icon: faBookReader,
    slug: "moral-stories-values",
  },
  {
    name: "Parenting Tips & Resources",
    description: "Guidance for creating a safe, educational home environment.",
    icon: faHandsHelping,
    slug: "parenting-tips-resources",
  },
  {
    name: "Preschool Education Trends",
    description: "Latest methodologies in early childhood education.",
    icon: faGraduationCap,
    slug: "preschool-education-trends",
  },
  {
    name: "Teacher & Caregiver Guides",
    description: "Practical tips for educators and caregivers.",
    icon: faChalkboardUser,
    slug: "teacher-caregiver-guides",
  },
  {
    name: "Behind the Scenes at KinderFun",
    description: "Insights into production and our educational philosophy.",
    icon: faCamera,
    slug: "behind-the-scenes",
  },
  {
    name: "Creative Arts & Crafts for Kids",
    description: "DIY projects and art activities for creativity.",
    icon: faPaintBrush,
    slug: "creative-arts-crafts",
  },
  {
    name: "Language Development & Literacy",
    description: "Enhancing early reading and language skills.",
    icon: faLanguage,
    slug: "language-development-literacy",
  },
  {
    name: "Emotional Intelligence & Mindfulness",
    description: "Fostering emotional growth and mindfulness in children.",
    icon: faSmile,
    slug: "emotional-intelligence-mindfulness",
  },
  {
    name: "Sensory Play & Exploration",
    description: "Activities that stimulate the senses for deeper learning.",
    icon: faHandSparkles,
    slug: "sensory-play-exploration",
  },
  {
    name: "Educational Games & Activities",
    description: "Reviews and recommendations of learning games.",
    icon: faGamepad,
    slug: "educational-games-activities",
  },
  {
    name: "Technology in Early Education",
    description: "How to integrate apps and digital tools safely.",
    icon: faTabletAlt,
    slug: "technology-early-education",
  },
  {
    name: "Health, Nutrition & Physical Activity",
    description: "Healthy habits and active play ideas.",
    icon: faAppleAlt,
    slug: "health-nutrition-physical-activity",
  },
  {
    name: "Child Safety & Screen Time Management",
    description: "Tips on balancing digital exposure and ensuring safety.",
    icon: faShieldAlt,
    slug: "child-safety-screen-time",
  },
  {
    name: "Seasonal & Holiday Learning Activities",
    description: "Themed activities based on seasons and holidays.",
    icon: faTree,
    slug: "seasonal-holiday-activities",
  },
  {
    name: "Multicultural Education & Diversity",
    description: "Celebrating diversity and introducing different cultures.",
    icon: faGlobe,
    slug: "multicultural-education-diversity",
  },
  {
    name: "Storytelling & Imaginative Play",
    description: "The importance of storytelling and role-playing.",
    icon: faTheaterMasks,
    slug: "storytelling-imaginative-play",
  },
  {
    name: "Learning Through Nature & Outdoor Activities",
    description: "How outdoor play boosts learning.",
    icon: faLeaf,
    slug: "nature-outdoor-activities",
  },
  {
    name: "Fine Motor Skills & Hand-Eye Coordination",
    description: "Activities for developing motor skills.",
    icon: faHandPaper,
    slug: "fine-motor-hand-eye",
  },
  {
    name: "Social Skills & Group Activities",
    description: "Games and activities that foster social interaction.",
    icon: faUsers,
    slug: "social-skills-group-activities",
  },
  {
    name: "Early Science & Discovery",
    description: "Basic science concepts through fun experiments.",
    icon: faFlask,
    slug: "early-science-discovery",
  },
  {
    name: "Cultural Celebrations & Traditions",
    description: "Highlighting various cultural festivities.",
    icon: faScroll,
    slug: "cultural-celebrations-traditions",
  },
  {
    name: "DIY Home Learning Spaces",
    description: "Tips for setting up creative, educational spaces at home.",
    icon: faHome,
    slug: "diy-home-learning-spaces",
  },
  {
    name: "Reviews & Recommendations of Educational Tools",
    description: "Insights on books, toys, apps, and more.",
    icon: faStar,
    slug: "reviews-educational-tools",
  },
  {
    name: "Interviews with Educators & Experts",
    description: "Conversations with experts in early childhood education.",
    icon: faMicrophone,
    slug: "interviews-educators-experts",
  },
  {
    name: "Success Stories & Testimonials",
    description: "Real stories from parents and teachers using KinderFun.",
    icon: faTrophy,
    slug: "success-stories-testimonials",
  },
];

const Blog: React.FC<BlogCategoriesProps> = ({ blogs }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 text-primary">Blog Categories</h1>
      <p className="text-gray-dark mb-8">
        Explore articles on various topics including early childhood education,
        parenting tips, and more!
      </p>

      {/* Grid of Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link to={`/category/${category.slug}`} key={category.slug}>
            <div className="group relative bg-[var(--primary)] text-white flex flex-col items-center justify-center p-4 aspect-square rounded-lg shadow-md hover:bg-[var(--secondary)] transition">
              {/* Icon */}
              <FontAwesomeIcon icon={category.icon} size="2x" />
              {/* Category Name */}
              <span className="mt-2 text-center text-sm sm:text-base font-semibold">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
