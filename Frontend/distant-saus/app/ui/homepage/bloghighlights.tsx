import React from 'react';
import Link from 'next/link';

type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    link: string;
};

// Mock data for demonstration. Replace with real data from your backend or API.
const blogPosts: BlogPost[] = [
    { id: 1, title: 'The Art of Anime', excerpt: 'Exploring the unique art styles in anime...', imageUrl: '/images/blog1.jpg', link: '/blog/the-art-of-anime' },
    { id: 2, title: 'Basketball Legends', excerpt: 'A look at the legends who shaped basketball...', imageUrl: '/images/blog2.jpg', link: '/blog/basketball-legends' },
    { id: 3, title: 'Anime and Sports', excerpt: 'How anime portrays sports and inspires fans...', imageUrl: '/images/blog3.jpg', link: '/blog/anime-and-sports' },
    // Add more blog posts as needed.
];

const BlogHighlights: React.FC = () => {
    return (
        <div className="container mx-auto my-10 p-4">
            <h2 className="text-2xl font-bold mb-6">Latest from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blogPosts.map(post => (
                    <div key={post.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <Link href={post.link}
                                className="text-blue-500 hover:text-blue-700 transition duration-300">Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogHighlights;
