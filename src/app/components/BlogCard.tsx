import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function BlogCard({ post }: { post: { id: number; title: string; description: string; image: string } }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105">
      {/* Image Container */}
      <div className="w-full h-56 rounded-lg overflow-hidden relative">
        <Image
          src={post.image}
          alt={post.title}
          width={500} 
          height={300} 
          layout="responsive" 
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <h2 className="text-2xl font-bold mt-4 text-blue-400">{post.title}</h2>
      <p className="text-gray-300 mt-2 text-sm">{post.description}</p>

      {/* Read More Button */}
      <Link href={`/blog/post/${post.id}`}>
        <span className="mt-4 inline-block px-5 py-2 bg-blue-500 hover:bg-purple-500 text-white rounded-full text-sm font-semibold cursor-pointer transition-all">
          Read More →
        </span>
      </Link>
    </div>
  );
}
