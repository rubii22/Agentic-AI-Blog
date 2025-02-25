import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  { 
    id: 1, 
    title: "What is Agentic AI?", 
    description: "Understanding the basics of Agentic AI and its role in shaping intelligent, autonomous systems.",
    image: "/ai-1.jpg" 
  },
  { 
    id: 2, 
    title: "Uses of Agentic AI", 
    description: "Exploring real-world applications where Agentic AI is revolutionizing industries and automation.", 
    image: "/ai-2.jpg" 
  },
  { 
    id: 3, 
    title: "Future of AI Agents", 
    description: "How AI agents are evolving and what the future holds for this game-changing technology.", 
    image: "/ai-3.jpg" 
  },
  { 
    id: 4, 
    title: "AI vs Machine Learning", 
    description: "Breaking down the key differences and similarities between AI and Machine Learning.", 
    image: "/ai-4.jpg" 
  },
  { 
    id: 5, 
    title: "Building AI Applications", 
    description: "Step-by-step guide on how to develop AI-powered applications using modern tools and frameworks.", 
    image: "/ai-5.jpg" 
  },
  { 
    id: 6, 
    title: "The Ethics of AI", 
    description: "Understanding the ethical challenges in AI development and how to create responsible AI.", 
    image: "/ai-6.jpg" 
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <h1 className="text-5xl font-extrabold text-blue-400 text-center drop-shadow-lg">Agentic AI Blog</h1>
      <p className="text-gray-300 text-center mt-3 max-w-2xl mx-auto">
        Stay updated with the latest insights on <strong>Artificial Intelligence, Machine Learning, and AI-driven applications.</strong> 🚀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={500} 
              height={300} 
              className="w-full h-52 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-bold text-blue-400 mt-4">{post.title}</h2>
            <p className="text-gray-300 mt-2 text-sm">{post.description}</p>
            <Link href={`/blog/post/${post.id}`} className="mt-4 inline-block">
              <span className="px-5 py-2 bg-blue-500 hover:bg-purple-500 text-white rounded-full text-sm font-semibold cursor-pointer transition-all">
                Read More →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
